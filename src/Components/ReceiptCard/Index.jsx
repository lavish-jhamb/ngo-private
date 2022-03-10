import React, { useState } from "react";
import { receiptController } from "../../Api/Receipt/controller";
import "./Index.css";

const Receipt = (props) => {
  const { data } = props;

  const [pdfFile,setPdfFile] = useState('');

  const generatePdfAndShare = async () => {
    const response = await receiptController.donationReceipt();
    setPdfFile(response.data);
    const pdf = new File([pdfFile], "receipt.pdf", { type: "application/pdf" });
    const files = [pdf];
    if (navigator.share) {
      navigator
        .share({
          files: files,
        })
        .catch((error) => {
          return error;
        });
    }
  };

  const handleShare = async (e) => {
    const value = JSON.parse(e.currentTarget?.dataset?.value);
    const donationExternalId = value?.externalId;
    document.cookie = `donorExternalId=${donationExternalId};domain=localhost;secure`;
    document.cookie = `donorExternalId=${donationExternalId};domain=ngo-donation-management.netlify.app;secure`;
    await generatePdfAndShare();
  }

  return (
    <div>
      <div className="cardContent">
        <div className="cardHeader">
          <div className="cardTitle">
            <h4>
              <div className="">{data?.donorInfo?.name}</div>
            </h4>
            <div>
              {props.shareBtn && (
                <button data-value={JSON.stringify(data)} onClick={handleShare} className="menuBtn">
                  <i className="bx bxs-share-alt"></i>
                </button>
              )}
              <button className="menuBtn">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
            </div>
          </div>
          <div className="cardData">
            <p>
              <i className="fas fa-phone-alt cardIcon"></i>{" "}
              {data?.donorInfo?.mobileNumber}
            </p>
            <p>
              <i className="fa-solid fa-location-dot cardIcon"></i>{" "}
              {data?.donorInfo?.address},{data?.donorInfo?.city}
            </p>
          </div>
        </div>
        {props.cardFooter && (
          <div className="cardFooter">
            <div>
              <h5>Rs. {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(data?.amount || 0)}</h5>
              <span className="categoryReceipt">
                For: {data?.category?.name}
              </span>
            </div>
            <div>
              <p>Receipt No. {data?.externalId.split("-")[0]}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receipt;