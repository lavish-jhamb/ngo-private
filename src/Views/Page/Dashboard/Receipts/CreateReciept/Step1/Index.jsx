import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptForm(props) {
  const { setPage } = props;

  const navigate = useNavigate();

  const submitHandler = () => {
    setPage((page) => page + 1);
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
              <input placeholder="Phone number" type="number" />
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="text" />
              <input placeholder="Pan Number" type="text" />
              <input placeholder="Address" type="text" />
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
