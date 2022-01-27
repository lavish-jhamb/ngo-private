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

export const onSignInSubmit = (contact,navigate,isRequired=false) => {
    localStorage.setItem("contact", contact);
    const phoneNumber = "+91" + contact;
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth(firebaseApp);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            notify.success("OTP has been sent", { toastId: "login-id" });
        })
        .then(() => {
            isRequired && navigate("/login/otp")
        })
        .catch((error) => {
            notify.error(error.message);
        });
};

