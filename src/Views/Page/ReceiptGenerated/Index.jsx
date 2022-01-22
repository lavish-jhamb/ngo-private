import React from "react";
import MainLayout from "../../Layout/Layout2/Main";
import "./Index.css";

function ReceiptGenerated() {
  return (
    <div>
      <MainLayout title="Create Receipt" />

      <div className="receiptGenContainer">
        <div className="receiptGenContent">
          <div className="cardRG">
            Name: <br />
            Email:
          </div>

          <div className="">
            
            <div className="receiptGenBtnsGrp">
              <button className="btnGrpRow">
                <i class="bx bxs-share-alt"></i> Share
              </button>
              <button className="btnGrpRow">
                <i class="bx bx-download"></i> Download
              </button>
            </div>

            <div className="">
              <button className="bttnDone">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReceiptGenerated;
