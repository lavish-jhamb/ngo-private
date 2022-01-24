import React from "react";
import MainLayout from "../../../Layout/Layout2/Main";
import "./Index.css";

export default function CreateReciept2(props) {
  const {CreateReciept1}=props;
  const CreateRecieptSuccesful=()=>{
    CreateReciept1(console.log("Create Reciept Success")
    )
   
  }
  return (
    <>
      <MainLayout title="Create Reciept">
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
                  {" "}
                  <option value="">Select Category</option>
                  <input
                    type="text"
                    placeholder="Select Category"
                    autoComplete="on"
                    required
                  />
                </select>
                <input
                  placeholder="Additional Note (Optional)"
                  type="text"
                  autoComplete="off"
                />
              </div>
              <div className="iconcreatereciept2">
                <button type="submit" onClick={CreateRecieptSuccesful}>
                  Create Reciept
                  <span>
                    <i class="fas fa-chevron-right"></i>
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

