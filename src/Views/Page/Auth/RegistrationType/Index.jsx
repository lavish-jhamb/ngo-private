import React from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import organisationIcon from "./Images/organisation.png";
import VolunteerIcon from "./Images/volunteer.png";
import ShareIcon from "./Images/share.png";
import { useNavigate } from "react-router-dom";

function RegistrationType() {
  const navigate = useNavigate();

  const ngoHandler = () => {
    navigate("/NGOprofile");
  };
  const volunteerHandler = () => {
    navigate("/volunteer-profile");
  };

  return (
    <PrimaryLayout>
      <div className={Style.registrationContainer}>
        <div className={Style.registrationWrapper}>
          <h2>Register as</h2>
          <div className={Style.registrationType}>
            <div onClick={ngoHandler} className={Style.typeOneWrapper}>
              <span className={Style.typeOne}>
                <img src={organisationIcon} alt="icon" />
              </span>
              NGO
            </div>
            <div onClick={volunteerHandler} className={Style.typeTwoWrapper}>
              <span className={Style.typeTwo}>
                <img src={VolunteerIcon} alt="icon" />
              </span>
              Volunteer
            </div>
          </div>
        </div>
        <div className={Style.shareContainer}>
          <button className={Style.shareButton}>
            <img src={ShareIcon} alt="icon" />
            Share this app
          </button>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default RegistrationType;
