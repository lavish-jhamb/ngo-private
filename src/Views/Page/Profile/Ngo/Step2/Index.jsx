import React from "react";
import Style from "./Index.module.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import ArrowIcon from "./Images/arrow.png";

function ProfileTwo(props) {
  const { prevStep, handleChange, values, ngoFormHandler } = props;

  const navigate = useNavigate();

  const prevPageHandler = () => {
    prevStep();
  };

  const submitHandler = () => {
    ngoFormHandler(navigate);
  };

  return (
    <SecondaryLayout title="NGO Profile">
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
            <input
              value={values.phone}
              onChange={handleChange("phoneNo")}
              type="text"
              placeholder="Phone Number (Official)"
            />
            <input
              value={values.website}
              onChange={handleChange("website")}
              type="text"
              placeholder="Website"
            />
          </div>
          <div className={Style.address}>
            <h2>Address Details</h2>
          </div>
          <div className={Style.addressDetails}>
            <input
              value={values.address}
              onChange={handleChange("address")}
              type="text"
              placeholder="Address"
            />
            <input
              value={values.city}
              onChange={handleChange("city")}
              type="text"
              placeholder="City"
            />
            <input
              value={values.pincode}
              onChange={handleChange("pinCode")}
              type="text"
              placeholder="Pincode"
            />
            <input
              value={values.state}
              onChange={handleChange("state")}
              type="text"
              placeholder="state"
            />
          </div>
        </div>
        <div className={Style.submitButton}>
          <button onClick={submitHandler} type="submit">
            Submit
          </button>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileTwo;
