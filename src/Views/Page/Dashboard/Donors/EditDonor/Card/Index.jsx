import React, { useState } from "react";
import "./Index.css";
import UpdateCategory from "./UpdateCategoryPopup/Index";

function EditDonorCard({
  category,
  amount,
  dueMonth,
  dueYear,
  dueDate,
  fetchCategoryName,
  categoryName,
  setCategoryName,
  updateCategoryName,
}) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [updateModal, setUpdateModal] = useState(false);

  return (
    <div className="editCardContainer">
      <div className="editCardHeader">
        <span>{fetchCategoryName || category.name}</span>
        <span>
          <i onClick={() => setUpdateModal(true)} className="fas fa-pen"></i>
          {updateModal && (
            <UpdateCategory
              setUpdateModal={setUpdateModal}
              category={category}
              amount={amount}
              dueMonth={months[dueMonth - 1]}
              dueYear={dueYear}
              dueDate={dueDate}
              updateCategoryName={updateCategoryName}
              categoryName={categoryName}
              setCategoryName={setCategoryName}
            />
          )}
        </span>
      </div>

      <div className="editCardFooter">
        <div>
          <span>Amount: </span>Rs.{amount}
        </div>
        {dueDate && (
          <div>
            <span>Due from: </span>
            {months[dueMonth - 1]}, {dueYear}
          </div>
        )}
      </div>
    </div>
  );
}

export default EditDonorCard;
