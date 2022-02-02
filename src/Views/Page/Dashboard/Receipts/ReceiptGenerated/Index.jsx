import React, { useEffect, useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { uris } from "../../../../../Config/Router/URI";
import { receiptController } from "../../../../../Api/Receipt/controller";

function ReceiptGenerated() {
  const [pdfUrl, setPdfUrl] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(uris.receipts);
  };

  useEffect(() => {
    const generatePdf = async () => {
      const response = await receiptController.donationReceipt();
      const file = new Blob([response?.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      setPdfUrl(fileURL);
    };

    generatePdf();
  }, []);

  return (
    <SecondaryLayout title="Create Receipt">
      <div className="receiptGenContainer">
        <div className="receiptGenContent">
          <div className="cardRG">
            {pdfUrl && (
              <object
                data={pdfUrl}
                type="application/pdf"
                width="50%"
                height="200px"
              >
                <p>
                  Missing PDF plugin for this browser.
                  <a
                    rel="noreferrer"
                    target="_blank"
                    download={true}
                    href={pdfUrl}
                  >
                    Click here to download the PDF file.
                  </a>
                </p>
              </object>
            )}
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
