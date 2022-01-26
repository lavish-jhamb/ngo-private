import React from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { uris } from "../../../../../Config/Router/URI";

function ReceiptGenerated() {
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(uris.receipts);
  };

  return (
    <SecondaryLayout title="Create Receipt">
      <div className="receiptGenContainer">
        <div className="receiptGenContent">
          <div className="cardRG">
            Name: <br />
            Email:
          </div>
          <div className="">
            <div className="receiptGenBtnsGrp">
              <button className="btnGrpRow">
                <i className="bx bxs-share-alt"></i> Share
              </button>
              <button className="btnGrpRow">
                <i className="bx bx-download"></i> Download
              </button>
            </div>
            <div className="">
              <button onClick={submitHandler} className="bttnDone">
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ReceiptGenerated;