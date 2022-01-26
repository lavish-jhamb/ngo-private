import React from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import firebaseApp from "../../../../firebase";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";


function LoginPage() {

  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate(uris.otp);
  };

  const configureRecaptcha = () => {
    const auth = getAuth(firebaseApp);
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
      },
      auth
    );
  };

  const onSignInSubmit = (e) => {
    e.preventDefault();
    configureRecaptcha();

    const phoneNumber = "+91" + 7988065836;
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth(firebaseApp);
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("Otp sent");
      })
      .catch((error) => {
        console.log("Otp not sent");
      });
  };

  return (
    <PrimaryLayout header="Login">
      <div className={Style.loginWrapper}>
        <main className={Style.loginContainer}>
          <div id="sign-in-button"></div>
          <form onSubmit={onSignInSubmit} className={Style.loginForm}>
            <label>Enter phone number</label>
            <input placeholder="Phone number" type="text" />
            <button id="sign-in-button" type="submit">
              Login
            </button>
          </form>
        </main>
      </div>
    </PrimaryLayout>
  );
}

export default LoginPage;
