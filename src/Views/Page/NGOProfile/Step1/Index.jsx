import React from "react";
import Style from "./Index.module.css";
import UploadIcon from "../Step1/Images/upload.png";
import NextIcon from "../Step1/Images/next.png";
import MainLayout from "../../../Layout/Layout2/Main";

function ProfileOne() {
  return (
    <MainLayout>
      <div className={Style.ngoProfileWrapper}>
        <div className={Style.ngoProfileContainer}>
          <div className={Style.header}>
            <h2>NGO Details</h2>
            <p>Step 1 of 2</p>
          </div>
          <div className={Style.ngoFormContainer}>
            <div className={Style.ngoForm}>
              <div className={Style.uploadLogo}>
                <label htmlFor="file-input" class="name">
                  NGO Logo <img src={UploadIcon} alt="icon" />
                </label>
                <input id="file-input" type="file" />
              </div>
              <div className={Style.uploadPdf}>
                <label htmlFor="file-input" class="name">
                  Reg. Certificate PDF <img src={UploadIcon} alt="icon" />
                </label>
                <input id="file-input" type="file" />
              </div>
              <input type="text" placeholder="NGO Name" />
              <input type="text" placeholder="Owner Name" />
              <input type="text" placeholder="PAN NO." />
              <input type="text" placeholder="Registration NO." />
            </div>
            <div className={Style.nextButton}>
              <button type="submit">
                Next
                <span>
                  <img src={NextIcon} alt="icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfileOne;
