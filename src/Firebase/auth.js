import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebaseApp from "./firebase";
import notify from "../Utils/notify";
import { uris } from "../Config/Router/URI";

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

export const onSignInSubmit = (contact, component, navigate) => {
    localStorage.setItem("contact", contact);
    const phoneNumber = "+91" + contact;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth(firebaseApp);
    const authentication = signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
        })
        .then(() => {
            component === 'login' && navigate(uris.otp);
            // component === 'otp' && window.location.reload();
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
            navigate(uris.registration);
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
