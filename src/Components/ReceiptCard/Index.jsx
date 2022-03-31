import React, { useEffect, useRef, useState } from "react";
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

  const handleDeleteClick = (e) => {
    setOpen(false);
    setUpdateModal(true);

    const id = JSON.parse(e.currentTarget?.dataset?.donation);
    setGetDeleteId(id);
  };

  const deleteData = async () => {
    if (props.receipts) {
      // await receiptController.deleteDonations(getDeleteId);
      props.deleteDonations(getDeleteId);
    }

    if (props.volunteer) {
      props.deleteNGOVolunteer(getDeleteId);
    }
  };

  let ref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div>
      <div className="cardContent">
        <div className="cardHeader">
          <div className="cardTitle">
            <h4>
              <div className="">
                {props.receipts && data?.donorInfo?.name}
                {props.volunteer && data?.name}
              </div>
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
              <div className="receiptCardDropdownContainer">
                <div className={`receiptDropdown ${open && "receiptCardShow"}`}>
                  <ul>
                    <li
                      ref={ref}
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
                      deleteData,
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="cardData">
            <p>
              <i className="fas fa-phone-alt cardIcon"></i>{" "}
              {props.receipts && "+91" + data?.donorInfo?.mobileNumber}
              {props.volunteer && data?.mobile}
            </p>
            <p>
              {props.receipts && (
                <i className="fa-solid fa-location-dot cardIcon"></i>
              )}{" "}
              {props.receipts && data?.donorInfo?.address + ", "}
              {props.receipts && data?.donorInfo?.city}
              {props.volunteer && (
                <i className="fas fa-envelope cardIcon"></i>
              )}{" "}
              {props.volunteer && data?.email}
            </p>
          </div>
        </div>
        {props.cardFooter && (
          <div className="cardFooter">
            <div>
              <h5>
                ₹{" "}
                {new Intl.NumberFormat("en-IN").format(
                  (props.receipts && data?.amount) || 0
                )}
              </h5>
              <span className="categoryReceipt">
                For: {props.receipts && data?.category?.name}
              </span>
            </div>
            <div>
              <p>
                Receipt No. {props.receipts && data?.externalId.split("-")[0]}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Receipt;
