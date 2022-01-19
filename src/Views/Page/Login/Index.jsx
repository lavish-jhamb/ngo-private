import React from "react";
import Style from "./Index.module.css";
import MainLayout from "../../Layout/Main";

function LoginPage() {
  return (
    <MainLayout>
      <div className={Style.loginWrapper}>
        <main className={Style.loginContainer}>
          <form className={Style.loginForm}>
            <label>Enter phone number</label>
            <input placeholder="Phone number" type="text" />
            <button type="submit">Login</button>
          </form>
        </main>
      </div>
    </MainLayout>
  );
}

export default LoginPage;
