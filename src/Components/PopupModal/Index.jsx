import React, { useEffect, useRef } from "react";
import "./Index.css";

function PopupModal({ popupModalData }) {
  let ref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!ref?.current?.contains(event?.target)) {
        popupModalData.setUpdateModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleUpdateSubmit = () => {
    popupModalData.updateCategoryName();
    popupModalData.setUpdateModal(false);
  };

  return (
    <>
      <div className="updateCategoryModal"></div>

      <div ref={ref} className="updateCategoryContainer">
        <div className="updateCategoryHeader">
          {popupModalData.popup === "donorCategory" && "Update Category"}
          {popupModalData.popup === "receiptDelete" && "Delete"}
          {popupModalData.popup === "offlineReceiptInfo" && "Message"}
        </div>

        <div className="updateCategoryBottom">
          {popupModalData.popup === "donorCategory" && (
            <div className="updateCategoryForm">
              <input
                type="text"
                placeholder="Category"
                value={popupModalData.categoryName}
                onChange={(e) => popupModalData.setCategoryName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Amount"
                defaultValue={popupModalData.amount}
                disabled
              />
              {popupModalData.dueDate && (
                <input
                  type="text"
                  placeholder="Due Date"
                  defaultValue={
                    popupModalData.dueMonth + ", " + popupModalData.dueYear
                  }
                  disabled
                />
              )}
            </div>
          )}
          {popupModalData.popup === "receiptDelete" && (
            <div className="updateCategoryText">
              Are you sure you want to delete?
            </div>
          )}
          {popupModalData.popup === "offlineReceiptInfo" && (
            <div className="updateCategoryText">
              If you want an online receipt to keep in sync with your offline
              receipt.
            </div>
          )}

          <div className="updateCategoryBtns">
            {popupModalData.popup === "offlineReceiptInfo" ? (
              <button
                onClick={() => popupModalData.setUpdateModal(false)}
                className="single-button"
              >
                OK
              </button>
            ) : (
              <button onClick={() => popupModalData.setUpdateModal(false)}>
                Cancel
              </button>
            )}
            {popupModalData.popup === "donorCategory" && (
              <button onClick={handleUpdateSubmit}>Update</button>
            )}
            {popupModalData.popup === "receiptDelete" && (
              <button
                onClick={() => {
                  popupModalData.deleteData();
                  popupModalData.setUpdateModal(false);
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupModal;
