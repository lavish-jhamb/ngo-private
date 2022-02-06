import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptForm(props) {
  const { nextStep, handleChange, values, loading } = props;

  const navigate = useNavigate();

  const submitHandler = () => {
    nextStep();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="Create Receipt" handler={goBack}>
      <div className="donor-details-wrapper-1">
        <div className="donor-details-container-1">
          <div className="donor-header-1">
            <h2>Donor Details</h2>
            <p>Step 1 of 2</p>
          </div>
          <div className="donor-details-1">
            <div className="spinner">
              <input
                onChange={handleChange("mobileNumber")}
                value={values.mobileNumber || ""}
                placeholder="Phone number"
                type="number"
              />
              {loading && (
                <img
                  width="80"
                  src="/resources/images/spinner.gif"
                  alt="loading"
                />
              )}
            </div>
            <input
              onChange={handleChange("name")}
              value={values.name}
              placeholder="Name"
              type="text"
            />
            <input
              onChange={handleChange("email")}
              value={values.email}
              placeholder="Email"
              type="text"
            />
            <input
              onChange={handleChange("dateOfBirth")}
              value={values.dateOfBirth}
              placeholder="Date of Birth"
              type="date"
            />
            <input
              onChange={handleChange("panNumber")}
              value={values.panNumber}
              placeholder="Pan Number"
              type="text"
            />
            <div className="radioButtons" onChange={handleChange("gender")}>
              <div className="male">
                <input type="radio" name="radio" value="Male" defaultChecked />
                <label htmlFor="male">Male</label>
              </div>
              <div className="female">
                <input type="radio" name="radio" value="Female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>
        <div className="reciept-button-1">
          <button type="submit" onClick={submitHandler}>
            Next
            <span>
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default CreateRecieptForm;
