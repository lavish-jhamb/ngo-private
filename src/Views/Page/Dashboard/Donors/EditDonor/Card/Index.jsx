import React from "react";
import "./Index.css";

function EditDonorCard() {
  return (
    <div className="editCardContainer">
      <div className="editCardHeader">
        <span>Some program name here</span>
        <span>
          <i className="fas fa-pen"></i>
        </span>
      </div>

      <div className="editCardFooter">
        <div>
          <span>Amount: </span>Rs.75000
        </div>
        <div>
          <span>Due from: </span>Jan, 2022
        </div>
      </div>
    </div>
  );
}

export default EditDonorCard;
