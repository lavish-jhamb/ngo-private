import React from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function NewDonor() {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1)
  }

  return (
    <SecondaryLayout title="New Donor" handler={goBack}>
      <div className={Style.container}>
        <div className={Style.form}>
          <div className={Style.addressDetails}>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Email" />
            <select name="donation_period">
                <option value="">Select donation period</option>
                <option value="3">3 months</option>
                <option value="6">6 months</option>
                <option value="12">12 months</option>
            </select>
          </div>
        </div>
        <div className={Style.submitButton}>
          <button type="submit">Add Donor</button>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default NewDonor;
