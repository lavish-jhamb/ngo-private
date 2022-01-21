import React from "react";
import Style from "./Index.module.css";
import MainLayout from "../../Layout/Main";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <MainLayout>
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
    </MainLayout>
  );
}

export default LoginPage;
