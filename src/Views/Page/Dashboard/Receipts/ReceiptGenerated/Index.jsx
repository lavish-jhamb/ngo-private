import React, { useEffect, useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { uris } from "../../../../../Config/Router/URI";
import notify from "../../../../../Utils/notify";
import { receiptController } from "../../../../../Api/Receipt/controller";

function ReceiptGenerated() {
  const [pdfUrl, setPdfUrl] = useState("");
  const [file, setFile] = useState();

  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(uris.receipts);
  };

  useEffect(() => {
    const generatePdf = async () => {
      const response = await receiptController.donationReceipt();
      setFile(response.data);
      const file = new Blob([response?.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      setPdfUrl(fileURL);
    };

    generatePdf();
  }, []);

  const shareHandler = () => {
    const pdf = new File([file], "reciept.pdf", { type: "application/pdf" });
    const files = [pdf];
    if (navigator.share) {
      navigator
        .share({
          files: files,
        })
        .then(() => {
          notify.success("Sharing successful", { toastId: "share-success" });
        })
        .catch((err) => {
          console.log(err);
          notify.error("Sharing failed", { toastId: "share-err" });
        });
    }
  };

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
                  Missing PDF plugin for this browser. <br />
                  you can download it by clicking download button down below
                </p>
              </object>
            )}
          </div>
          <div className="">
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
      </div>
    </SecondaryLayout>
  );
}

export default ReceiptGenerated;
