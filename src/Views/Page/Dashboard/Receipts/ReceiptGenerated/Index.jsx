import React, { useEffect, useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { uris } from "../../../../../Config/Router/URI";
import { receiptController } from "../../../../../Api/Receipt/controller";

function ReceiptGenerated() {
  const [pdfUrl, setPdfUrl] = useState("");
  const [pdfFile, setPdfFile] = useState();
  const [pngUrl, setPngUrl] = useState();

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(uris.receipts);
  };

  useEffect(() => {
    const generatePdf = async () => {
      const response = await receiptController.donationReceipt();
      setPdfFile(response.data);
      const file = new Blob([response?.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      setPdfUrl(fileURL);
    };

    const generateImage = async () => {
      const response = await receiptController.donationReceiptImage();
      const png = new Blob([response?.data], { type: "image/png" });
      const pngUrl = URL.createObjectURL(png);
      setPngUrl(pngUrl);
    };

    generatePdf();
    generateImage();
  }, []);

  const shareHandler = () => {
    const pdf = new File([pdfFile], "receipt.pdf", { type: "application/pdf" });
    let files = [];
    files.push(pdf);

    if (navigator.canShare && navigator.canShare({ files: files })) {
      navigator
        .share({
          files: files,
        })
        .catch((error) => {
          return error;
        });
    }
  };

  return (
    <SecondaryLayout title="Create Receipt">
      <div className="receiptGenContainer">
        <div className="receiptGenContent">
          <div className="cardRG">
            <div className="pngContainer">
              {pngUrl ? (
                <img src={pngUrl} alt="pdf" />
              ) : (
                <div className="spinner-container">
                <img className="pdf-spinner" src="/resources/images/spinner.gif" alt="spinner" />
                </div>
              )}
            </div>
          </div>
          <div className="receiptGenBtnsGrp">
            <button onClick={shareHandler} className="btnGrpRow">
              <i className="bx bxs-share-alt"></i> Share
            </button>
            <button className="btnGrpRow">
              <a href={pdfUrl} download={true} className="btnGrpRow">
                <i className="bx bx-download"></i> Download
              </a>
            </button>
          </div>
          <div className="">
            <button onClick={submitHandler} className="bttnDone">
              Done
            </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ReceiptGenerated;
