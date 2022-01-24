import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../../Layout/Layout2/Main";
import "./Index.css";

function CreateRecieptFormTwo(props) {

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate("/receipt-preview")    
  }

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <MainLayout title="Create Reciept" handler={goBack}>
        <div className="createreciept2wrapper">
          <div className="createreciept2container">
            <div className="headercreatere2ciept1">
              <h2>Donation Details</h2>
              <p>Step 2 of 2</p>
            </div>
            <div className="createreciept2formcontainer">
              <div className="createreciept2container">
                <input placeholder="Amount (in Rs.)" type="number" />
                <select
                  className=" "
                  name="paymentMethod"
                  aria-label="Payment Method"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Cash">Cash</option>
                  <option value="Online">Online</option>
                  <option value="Credit/Debit Card">Credit/Debit Card</option>
                  <option value="Cheque">Cheque</option>
                </select>
                <select>
                  <option value="">Select Category</option>
                </select>
                <input
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
      </MainLayout>
    </>
  );
}

export default CreateRecieptFormTwo;
