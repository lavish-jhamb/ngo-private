import React, { useEffect, useRef } from "react";
import "./Index.css";

function PopupModal({ popupModalData }) {
  // popup: "receiptDelete",
  //                       setUpdateModal,
  //                       deleteDonation,
  //                       popup:"donorCategory",

  let ref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!ref.current.contains(event.target)) {
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

          <div className="updateCategoryBtns">
            <button onClick={() => popupModalData.setUpdateModal(false)}>
              Cancel
            </button>
            {popupModalData.popup === "donorCategory" && (
              <button onClick={handleUpdateSubmit}>Update</button>
            )}
            {popupModalData.popup === "receiptDelete" && (
              <button
                onClick={() => {
                  popupModalData.deleteDonation();
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
