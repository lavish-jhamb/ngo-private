import React from "react";
import Style from "./Index.module.css";
import UploadIcon from "./Images/upload.png";
import NextIcon from "./Images/next.png";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function ProfileOne(props) {
  const { setPage } = props;

  const navigate = useNavigate();

  const pageHandler = () => {
    setPage((page) => page + 1);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="NGO Profile" handler={goBack}>
      <div className={Style.ngoProfileWrapper}>
        <div className={Style.ngoProfileContainer}>
          <div className={Style.header}>
            <h2>NGO Details</h2>
            <p>Step 1 of 2</p>
          </div>
          <div className={Style.ngoFormContainer}>
            <div className={Style.ngoForm}>
              <div className={Style.uploadLogo}>
                <label htmlFor="file-input">
                  NGO Logo <img src={UploadIcon} alt="icon" />
                </label>
                <input id="file-input" type="file" />
              </div>
              <div className={Style.uploadPdf}>
                <label htmlFor="file-input">
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
              <button onClick={pageHandler} type="submit">
                Next
                <span>
                  <img src={NextIcon} alt="icon" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileOne;
