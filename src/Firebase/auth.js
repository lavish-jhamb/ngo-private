import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import firebaseApp from "./firebase";
import notify from "../Utils/notify";

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
            component === 'login' && navigate('/login/otp');
            component === 'otp' && window.location.reload();
        })

    notify.promise(
        authentication,
        {
            pending: 'Verifying phone NO..',
            success: 'OTP has been sent',
            error:{
                render({data}){
                    return `${data.message}`
                }
            }
        }
    )
};
