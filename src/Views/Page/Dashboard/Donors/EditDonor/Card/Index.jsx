import React from "react";
import "./Index.css";

function EditDonorCard({
  category,
  amount,
  dueMonth,
  dueYear,
  dueDate,
  updateDonor,
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

  // const [updateModal, setUpdateModal] = useState(false);

  // const [fetchCategoryName, setfetchCategoryName] = useState(category.name);

  // const [categoryName, setCategoryName] = useState(category.name);

  // const updateCategoryName = async () => {
  //   try {
  //     const id = category.externalId;
  //     ngoCategoryController
  //       .updateCategory(id, categoryName)
  //       .then((response) => {
  //         if (response.status === 200) {
  //           setfetchCategoryName(response.data.name);
  //           console.log("update category response", response);
  //         } else {
  //           notify.error(response?.response?.data?.message);
  //         }
  //       });
  //   } catch (error) {
  //     return error;
  //   }
  // };

  return (
    <div className="editCardContainer">
      <div className="editCardHeader">
        <div>
          <span>Category: </span>
          {/* {fetchCategoryName || category.name} */}
          {category.name}
        </div>
        {/* <div>
          {updateDonor && (
            <i onClick={() => setUpdateModal(true)} className="fas fa-pen"></i>
          )}
          {updateModal && (
            <PopupModal
              popupModalData={{
                popup:"donorCategory",
                setUpdateModal,
                amount,
                dueMonth: months[dueMonth - 1],
                dueYear,
                dueDate,
                updateCategoryName,
                categoryName,
                setCategoryName,
              }}
            />
          )}
        </div> */}
      </div>

      <div className="editCardFooter">
        <div>
          <span>Amount: </span>₹{" "}
          {new Intl.NumberFormat("en-IN").format(
            amount || 0
          )}
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
