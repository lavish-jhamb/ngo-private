import React from "react";
import Style from "./Index.module.css";
import MainLayout from "../../Layout/Main";
import organisationIcon from "./Images/organisation.png";
import VolunteerIcon from "./Images/volunteer.png";
import ShareIcon from "./Images/share.png";

function RegistrationType() {
  return (
    <MainLayout>
      <div className={Style.registrationContainer}>
        <div className={Style.registrationWrapper}>
          <h2>Register as</h2>
          <div className={Style.registrationType}>
            <div className={Style.typeOneWrapper}>
              <span className={Style.typeOne}>
                <img src={organisationIcon} alt="icon" />
              </span>
              NGO
            </div>
            <div className={Style.typeTwoWrapper}>
              <span className={Style.typeTwo}>
                <img src={VolunteerIcon} alt="icon" />
              </span>
              Volunteer
            </div>
          </div>
        </div>
        <div className={Style.shareContainer}>
          <button className={Style.shareButton}>
            <img src={ShareIcon} alt="icon" />Share this app
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default RegistrationType;
