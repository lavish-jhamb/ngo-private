import React, { useState } from "react";
import { receiptController } from "../../Api/Receipt/controller";
import { getCookie } from "../../Utils/cookie";
import PopupModal from "../PopupModal/Index";
import "./Index.css";

const Receipt = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [getDeleteId, setGetDeleteId] = useState("");

  const handleShare = async (e) => {
    const donationExternalId = JSON.parse(e.currentTarget?.dataset?.value);
    document.cookie = `donorExternalId=${donationExternalId};domain=localhost;secure`;
    document.cookie = `donorExternalId=${donationExternalId};domain=ngo-donation-management.netlify.app;secure`;
    const id = getCookie("donorExternalId");
    if (id) {
      const response = await receiptController.donationReceipt();
      const pdf = new File([response?.data], "receipt.pdf", {
        type: "application/pdf",
      });
      const filesArray = [pdf];
      if (navigator.canShare && navigator.canShare({ files: filesArray })) {
        navigator
          .share({
            files: filesArray,
          })
          .catch((error) => {
            return error;
          });
      }
    }
  };

  const handleDelete = () => {
    setOpen(!open);
  };

  const handleOutsideClick = (e) => {
    if (e.target.contains(e.target) && open) {
      setOpen(false);
    }
  };

  const handleDeleteClick = (e) => {
    setUpdateModal(true);
    console.log(updateModal);
    
    const id = JSON.parse(e.currentTarget?.dataset?.donation);
    setGetDeleteId(id);
    console.log(id+" <<>> "+getDeleteId);
  };

  const deleteDonation = async () => {
    await receiptController.deleteDonations(getDeleteId);
  };

  return (
    <div>
      <div onClick={handleOutsideClick} className="cardContent">
        <div className="cardHeader">
          <div className="cardTitle">
            <h4>
              <div className="">{data?.donorInfo?.name}</div>
            </h4>
            <div>
              {props.shareBtn && (
                <button
                  data-value={JSON.stringify(data?.externalId)}
                  onClick={handleShare}
                  className="menuBtn"
                >
                  <i className="bx bxs-share-alt"></i>
                </button>
              )}
              <button onClick={handleDelete} className="menuBtn">
                <i className="bx bx-dots-vertical-rounded"></i>
              </button>
              <div className="dropdownContainer">
                <div className={`receiptDropdown ${open && "show"}`}>
                  <ul>
                    <li
                      data-donation={JSON.stringify(data?.externalId)}
                      onClick={handleDeleteClick}
                    >
                      Delete
                    </li>
                  </ul>
                </div>
                  {updateModal && (
                    <PopupModal
                      popupModalData={{
                        popup: "receiptDelete",
                        setUpdateModal,
                        deleteDonation,
                      }}
                    />
                  )}
              </div>
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
              <h5>
                Rs.{" "}
                {new Intl.NumberFormat("en-IN", {
                  maximumSignificantDigits: 3,
                }).format(data?.amount || 0)}
              </h5>
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
