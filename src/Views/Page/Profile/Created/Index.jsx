import React from 'react';
import Style from "./Index.module.css";
import notify from "../../../../Utils/notify";

function ProfileExit() {

  const exitHandler = () => {
    notify.warn(
      "Verification in progress! please wait or exit the application",
      { toastId: "verification-id" }
    );
  };

  return (
    <div className={Style.exitProfile}>
      <div className={Style.header}>
        <div className={Style.iconContainer}>
          <img src="/resources/images/logo.png" alt="icon" />
        </div>
        <h1><span>NGO</span> Buddy</h1>
        <p>An initiative by software Knights</p>
      </div>
      <div className={Style.profileContainer}>
        <div className={Style.profileContent}>
          <h1>Profile Created Successfully.</h1>
          <p>Your request has been sent to the verification team You will be notified onceour team verify your profile.Thanks for the cooperation.</p>
          <div className={Style.buttonContainer}>
            <button type="submit" onClick={exitHandler}>Exit Application</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileExit;
