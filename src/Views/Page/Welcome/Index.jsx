import React from "react";
import Style from "./Index.module.css";
import Icon from "./Images/icon.png";
import Vector from "./Images/vector.png";

function WelcomePage() {
  return (
    <div className={Style.welcomeWrapper}>
      <div className={Style.welcome}>
        <h3>Welcome to</h3>
        <div className={Style.iconContainer}>
          <img src={Icon} alt="icon" />
        </div>
        <h1>AppName</h1>
        <p>An initiative by Software Knights</p>
      </div>
      <div className={Style.vectorWrapper}>
        <div className={Style.vectorContainer}>
          <img src={Vector} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
