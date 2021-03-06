import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebaseApp from "./firebase";
import notify from "../Utils/notify";
import { uris } from "../Config/Router/URI";
import { exchangeTokenController } from "../Api/Exchange/controller";
import { ngoController } from "../Api/Ngo/controller";

export const configureRecaptcha = () => {
    const auth = getAuth(firebaseApp);
    window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
            'size': "invisible",
        },
        auth
    );
};

export const onSignInSubmit = (contact, navigate, isRequired = false) => {
    localStorage.setItem("contact", contact);
    const phoneNumber = "+91" + contact;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth(firebaseApp);
    const authentication = signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        })
        .then(() => {
            isRequired && navigate(uris.otp);
        })

    notify.promise(
        authentication,
        {
            pending: 'Verifying phone NO..',
            success: 'OTP has been sent',
            error: {
                render({ data }) {
                    return `${data.message}`
                }
            }
        }
    )
};

export const otpVerification = (userOtp, navigate) => {
    const verifyingOtp = window.confirmationResult
        .confirm(userOtp)
        ?.then((result) => {
            const firebaseToken = result?.user?.accessToken;
            document.cookie = `firebaseToken=${firebaseToken};domain=localhost;secure`;
            document.cookie = `firebaseToken=${firebaseToken};domain=ngo-donation-management.netlify.app;secure`;
            document.cookie = `firebaseToken=${firebaseToken};domain=ui.ngobuddy.com;secure`;
        }).then(() => {
            exchangeTokenController().then(() => {
                ngoController.getNgo().then(response => {
                    const data = response?.data[0];
                    const isActive = data?.active;
                    const logo = data?.logo;
                    localStorage.setItem('logo',logo);
                    let flag = false;
                    if (data?.ngoExternalId && isActive) {
                        flag = true
                        document.cookie = `ngoExternalId=${data?.ngoExternalId};domain=localhost;secure`;
                        document.cookie = `ngoExternalId=${data?.ngoExternalId};domain=ngo-donation-management.netlify.app`;
                        document.cookie = `ngoExternalId=${data?.ngoExternalId};domain=ui.ngobuddy.com`;
                        return navigate(uris.dashboard);
                    }
                    if (data?.ngoExternalId && !isActive) {
                        return navigate(uris.profileCreated)
                    }
                    if (!flag) {
                        return navigate(uris.registration);
                    }
                })
            })
        })

    notify.promise(verifyingOtp, {
        pending: "Verifying OTP..",
        success: "OTP verified",
        error: {
            render() {
                return `OTP didn't match`
            }
        }
    });
}