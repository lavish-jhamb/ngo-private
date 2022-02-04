import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import ArrowIcon from "../Step2/Images/arrow.png";

function CreateRecieptFormTwo(props) {
  const { prevStep, nextStep, handleChange, values } = props;

  const submitHandler = () => {
    nextStep();
  };

  const prevHandler = () => {
    prevStep();
  };

  return (
    <>
      <SecondaryLayout title="Create Receipt">
        <div className="createreciept2wrapper">
          <div className="createreciept2container">
            <div className="headercreatere2ciept1">
              <h2>
                <img onClick={prevHandler} src={ArrowIcon} alt="arrow" />
                Donation Details
              </h2>
              <p>Step 2 of 2</p>
            </div>
            <div className="createreciept2formcontainer">
              <div className="createreciept2container">
                <input
                  onChange={handleChange("amount")}
                  value={values.amount}
                  placeholder="Amount (in Rs.)"
                  type="number"
                />
                <select
                  onChange={handleChange("paymentMethod")}
                  value={values.paymentMethod}
                  name="paymentMethod"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="Online">Online</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="Cheque">Cheque</option>
                </select>
                <select
                className="category"
                required
                >
                  <option value="">Select Category</option>
                </select>
                <input
                  onChange={handleChange("description")}
                  value={values.description}
                  placeholder="Additional Note (Optional)"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="iconcreatereciept2">
                <button type="submit" onClick={submitHandler}>
                  Create Reciept
                  <span>
                    <i className="fas fa-chevron-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </SecondaryLayout>
    </>
  );
}

export default CreateRecieptFormTwo;
