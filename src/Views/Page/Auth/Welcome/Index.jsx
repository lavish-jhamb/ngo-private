import React from "react";
import Style from "./Index.module.css";

function WelcomePage() {
  return (
    <div className={Style.welcomeWrapper}>
      <div className={Style.welcome}>
        <h3>Welcome to</h3>
        <div className={Style.iconContainer}>
          <img src="/resources/images/logo.png" alt="icon" />
        </div>
        <h1><span>NGO</span> Buddy</h1>
        <p>An initiative by Software Knights</p>
      </div>
      <div className={Style.vectorWrapper}>
        <div className={Style.vectorContainer}>
          <img src="/resources/images/vector.png" alt="img" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
