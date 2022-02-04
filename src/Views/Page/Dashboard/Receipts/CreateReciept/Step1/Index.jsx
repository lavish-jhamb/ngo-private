import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptForm(props) {
  const { nextStep, handleChange, values ,loading} = props;

  const navigate = useNavigate();

  const submitHandler = () => {
    nextStep();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="Create Receipt" handler={goBack}>
      <div className="createrecieptwrapper">
        <div className="createrecieptcontainer">
          <div className="headercreatereciept1">
            <h2>Donor Details</h2>
            <p>Step 1 of 2</p>
          </div>
          <div className="createrecieptformcontainer">
            <div className="createrecieptcontainer">
              <div className="spinner">
                <input
                  onChange={handleChange("mobileNumber")}
                  value={values.mobileNumber || ''}
                  placeholder="Phone number"
                  type="number"
                />
                {loading && <img width="80" src="/resources/images/spinner.gif" alt="loading" />}
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
                onChange={handleChange("panNumber")}
                value={values.panNumber}
                placeholder="Pan Number"
                type="text"
              />
              <input
                onChange={handleChange("address")}
                value={values.address || ""}
                placeholder="Address"
                type="text"
              />
            </div>
            <div className="iconcreatereciept1">
              <button onClick={submitHandler} type="submit">
                Next
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default CreateRecieptForm;
