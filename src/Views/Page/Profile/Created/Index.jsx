import React from 'react';
import Icon from '../../../Layout/Primary/Images/icon.png';
import Style from "./Index.module.css";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

function ProfileExit() {

  const navigate = useNavigate();

  const exitHandler = () => {
    navigate(uris.dashboard);
  }

  return (
    <div className={Style.exitProfile}>
      <div className={Style.header}>
        <div className={Style.iconContainer}>
          <img src={Icon} alt="icon" />
        </div>
        <h1>AppName</h1>
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
