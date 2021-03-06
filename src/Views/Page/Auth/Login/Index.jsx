import React, { useEffect, useState } from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import { configureRecaptcha, onSignInSubmit } from "../../../../Firebase/auth";
import { validate } from "../../../../Utils/validate";
import notify from "../../../../Utils/notify";

function LoginPage() {
  let navigate = useNavigate();

  const [contact, setContact] = useState("");

  const inputEvent = (e) => {
    if (e.target.value.length === 11) {
      setContact(e.target.value.slice(0, 10));
    } else {
      setContact(e.target.value);
    }
  };

  useEffect(() => {
    configureRecaptcha();

    return () => {
      window.recaptchaVerifier.clear();
    };
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const { isValid, errors } = validate(contact);
    if (isValid) {
      onSignInSubmit(contact, navigate, true);
    } else if (errors.emptyPhone) {
      notify.error(errors.emptyPhone, { toastId: "empty-phone-id" });
    } else {
      notify.error(errors.invalidNo, { toastId: "invalidNo-id" });
    }
  };

  return (
    <PrimaryLayout header="Login">
      <div className={Style.loginWrapper}>
        <main className={Style.loginContainer}>
          <form className={Style.loginForm}>
            <label>Enter phone number</label>
            <input
              onChange={inputEvent}
              value={contact}
              placeholder="Phone number"
              type="number"
            />
            <button id="sign-in-button" onClick={loginHandler} type="submit">
              Login
            </button>
          </form>
        </main>
      </div>
    </PrimaryLayout>
  );
}

export default LoginPage;
