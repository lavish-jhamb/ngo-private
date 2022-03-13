import React, { useEffect, useRef } from "react";
import "./Index.css";

function UpdateCategory({
  setUpdateModal,
  amount,
  dueMonth,
  dueYear,
  dueDate,
  categoryName,
  setCategoryName,
  updateCategoryName,
}) {
  let ref = useRef();

  useEffect(() => {
    let handler = (event) => {
      if (!ref.current.contains(event.target)) {
        setUpdateModal(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleUpdateSubmit =  () => {
    updateCategoryName();
    setUpdateModal(false);
  };

  return (
    <>
      <div className="updateCategoryModal"></div>

      <div ref={ref} className="updateCategoryContainer">
        <div className="updateCategoryHeader">Update Category</div>

        <div className="updateCategoryBottom">
          <div className="updateCategoryForm">
            <input
              type="text"
              placeholder="Category"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Amount"
              defaultValue={amount}
              disabled
            />
            {dueDate && (
              <input
                type="text"
                placeholder="Due Date"
                defaultValue={dueMonth + ", " + dueYear}
                disabled
              />
            )}
          </div>

          <div className="updateCategoryBtns">
            <button onClick={() => setUpdateModal(false)}>Cancel</button>
            <button onClick={handleUpdateSubmit}>Update</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateCategory;
