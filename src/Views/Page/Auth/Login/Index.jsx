import React, { useEffect, useState } from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
// import { uris } from "../../../../Config/Router/URI";
import { configureRecaptcha , onSignInSubmit } from "../../../../Firebase/auth";

function LoginPage() {
  let navigate = useNavigate();

  const [contact, setContact] = useState("");

  const inputEvent = (e) => {
    setContact(e.target.value);
  };

  useEffect(() => {
    configureRecaptcha();
  },[])

  const loginHandler = (e) => {
    e.preventDefault();
    onSignInSubmit(contact,navigate,true);
  }

  return (
    <PrimaryLayout header="Login">
      <div className={Style.loginWrapper}>
        <main className={Style.loginContainer}>
          <form className={Style.loginForm}>
            <label>Enter phone number</label>
            <input
              onChange={inputEvent}
              placeholder="Phone number"
              type="text"
              value={contact}
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
