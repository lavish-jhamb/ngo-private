import React from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { volunteerController } from "../../../../Api/Volunteer/controller";

function RegistrationType() {
  const navigate = useNavigate();

  const ngoHandler = () => {
    navigate(uris.registerNgo);
  };

  const volunteerHandler = async () => {
    const volunteer = await volunteerController.getUserProfileVolunteer();

    if (volunteer?.data?.email) {
      navigate(uris.profileCreated);
    } else {
      navigate(uris.registerVolunteer);
    }
  };

  return (
    <PrimaryLayout>
      <div className={Style.registrationContainer}>
        <div className={Style.registrationWrapper}>
          <h2>Register as</h2>
          <div className={Style.registrationType}>
            <div onClick={ngoHandler} className={Style.typeOneWrapper}>
              <span className={Style.typeOne}>
                <img src="/resources/images/organisation.png" alt="icon" />
              </span>
              NGO
            </div>
            <div onClick={volunteerHandler} className={Style.typeTwoWrapper}>
              <span className={Style.typeTwo}>
                <img src="/resources/images/volunteer.png" alt="icon" />
              </span>
              Volunteer
            </div>
          </div>
        </div>
        <div className={Style.shareContainer}>
          <button className={Style.shareButton}>
            <img src="/resources/images/share.png" alt="icon" />
            Share this app
          </button>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default RegistrationType;
