import React, { useState } from "react";
import DonorPopup from "../../Views/Page/Dashboard/Donors/Popup/Index";
import Style from "./Index.module.css";

function Card({ donor }) {
  const [popup, setPopup] = useState(false);

  const togglePopup = ()=> {
    setPopup(!popup);
  }

  if (popup) {
    document.body.style.overflow='hidden';
  } 
  else {
    document.body.style.overflow='visible';
  }

  return (
    <div className={Style.cardWrapper}>
      <div className={Style.cards}>
        <h6>{donor.name}</h6>
        <div className={Style.reminderWrapper}>
          <div className={Style.reminder}>
            <i className="fa-solid fa-phone"></i>
            <span>{donor.phone}</span>
          </div>
          <button onClick={togglePopup}>Send Reminder</button>
          {popup && <DonorPopup togglePopup={togglePopup} />}
        </div>
      </div>
      <div className={Style.donationDetails}>
        <span>Last donation:</span>
        <span>Rs. {donor.donation}</span>
        <span>({donor.date})</span>
      </div>
    </div>
  );
}

export default Card;
