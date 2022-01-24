import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layout/Layout2/Main";
import "./Index.css";

function ReceiptPreview() {
  const navigate = useNavigate("");

  const submitHandler = () => {
    navigate("/receipt-generated");
  };

  return (
    <div>
      <MainLayout title="Create Receipt" />

      <div className="detailsPreview">
        <div className="createRecDetails">
          <div className="">
            <h3>Donor Details</h3>

            <p>Phone Number</p>
            <span>1234567890</span>
            <hr />

            <p>Name</p>
            <span>Some Name</span>
            <hr />

            <p>Email</p>
            <span>abc@gmail.com</span>
            <hr />

            <p>PAN No.</p>
            <span>DFEE65FEFAEF56E</span>
            <hr />

            <p>Address</p>
            <span>Some Address</span>
          </div>
          <div className="">
            <h3>Donation Details</h3>

            <p>Amount</p>
            <span>Rs. 123490</span>
            <hr />

            <p>Payment Method</p>
            <span>Some Method Name</span>
            <hr />

            <p>Category</p>
            <span>Category name</span>
            <hr />

            <p>Additional Note</p>
            <span>Some notes here.</span>
          </div>
          <div className="btnsPreview">
            <button className="editBtnPreview">Edit</button>
            <button onClick={submitHandler} className="submitBtnPreview">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptPreview;
