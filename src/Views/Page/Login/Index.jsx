import React from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <PrimaryLayout header="Login">
      <div className={Style.loginWrapper}>
        <main className={Style.loginContainer}>
          <form className={Style.loginForm}>
            <label>Enter phone number</label>
            <input placeholder="Phone number" type="text" />
            <button onClick={loginHandler} type="submit">
              Login
            </button>
          </form>
        </main>
      </div>
    </PrimaryLayout>
  );
}

export default LoginPage;
