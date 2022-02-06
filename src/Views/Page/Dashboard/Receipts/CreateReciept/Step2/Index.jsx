import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptFormTwo(props) {
  const { prevStep, nextStep, handleChange, values } = props;

  const navigate = useNavigate();

  const submitHandler = () => {
    nextStep();
  };

  const prevHandler = () => {
    prevStep();
  };

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <SecondaryLayout title="Create Receipt" handler={goBack}>
        <div className="donor-details-wrapper">
          <div className="donor-details-container">
            <div className="donor-header">
              <h2>
                <img
                  onClick={prevHandler}
                  src="/resources/images/backArrow.png"
                  alt="arrow"
                />
                Donation Details
              </h2>
              <p>Step 2 of 2</p>
            </div>
            <div className="donor-details">
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
              <input
                onChange={handleChange("category")}
                value={values.category}
                type="text"
                placeholder="Select category"
              />
              <input
                onChange={handleChange("description")}
                value={values.description}
                placeholder="Additional Note (Optional)"
                type="text"
                autoComplete="off"
              />
            </div>
            <div className="address-details">
              <h2>Address Details</h2>
              <input
                onChange={handleChange("address")}
                value={values.address}
                placeholder="Address"
                type="text"
              />
              <input
                onChange={handleChange("city")}
                value={values.city}
                placeholder="City"
                type="text"
              />
              <input
                onChange={handleChange("pinCode")}
                value={values.pinCode}
                type="number"
                placeholder="Pincode"
              />
              <input
                onChange={handleChange("state")}
                value={values.state}
                placeholder="State"
                type="text"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="reciept-button">
            <button type="submit" onClick={submitHandler}>
              Create Reciept
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </SecondaryLayout>
    </>
  );
}

export default CreateRecieptFormTwo;
