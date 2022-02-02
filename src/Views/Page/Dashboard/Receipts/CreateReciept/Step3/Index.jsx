import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../../Config/Router/URI";

function ReceiptPreview(props) {
  const { createDonation, prevStep, values } = props;
  const navigate = useNavigate();

  const submitHandler = async () => {
    const statusCode = await createDonation();
    console.log(statusCode);
    if (statusCode === 200) {
      navigate(uris.viewReceipt);
    }
  };

  const editHandler = () => {
    prevStep();
  };

  return (
    <SecondaryLayout title="Create Receipt">
      <div className="detailsPreview">
        <div className="createRecDetails">
          <div className="">
            <h3>Donor Details</h3>

            <p>Phone Number</p>
            <span>{values.mobileNumber}</span>
            <hr />

            <p>Name</p>
            <span>{values.name}</span>
            <hr />

            <p>Email</p>
            <span>{values.email}</span>
            <hr />

            <p>PAN No.</p>
            <span>{values.panNumber}</span>
            <hr />

            <p>Address</p>
            <span>{values.address}</span>
          </div>
          <div className="">
            <h3>Donation Details</h3>

            <p>Amount</p>
            <span>Rs. {values.amount}</span>
            <hr />

            <p>Payment Method</p>
            <span>{values.paymentMethod}</span>
            <hr />

            <p>Category</p>
            <span>Category name</span>
            <hr />

            <p>Additional Note</p>
            <span>{values.description}</span>
          </div>
          <div className="btnsPreview">
            <button onClick={editHandler} className="editBtnPreview">
              Edit
            </button>
            <button onClick={submitHandler} className="submitBtnPreview">
              Submit
            </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ReceiptPreview;
