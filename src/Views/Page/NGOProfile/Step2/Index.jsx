import React from "react";
import Style from "./Index.module.css";
import MainLayout from "../../../Layout/Layout2/Main";
import ArrowIcon from "../Step2/Images/arrow.png";

function ProfileTwo(props) {
  const { setPage } = props;

  const prevPageHandler = () => {
    setPage((page) => page - 1);
  };

  return (
    <MainLayout>
      <div className={Style.container}>
        <div className={Style.form}>
          <div className={Style.header}>
            <h2>
              <img onClick={prevPageHandler} src={ArrowIcon} alt="icon" />
              Contact Details
            </h2>
            <p>Step 2 of 2</p>
          </div>
          <div className={Style.contactDetails}>
            <input type="text" placeholder="Phone Number (Official)" />
            <input type="text" placeholder="Website" />
          </div>
          <div className={Style.address}>
            <h2>Address Details</h2>
          </div>
          <div className={Style.addressDetails}>
            <input type="text" placeholder="Address" />
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Pincode" />
            <input type="text" placeholder="state" />
          </div>
        </div>
        <div className={Style.submitButton}>
          <button type="submit">Submit</button>
        </div>
      </div>
    </MainLayout>
  );
}

export default ProfileTwo;
