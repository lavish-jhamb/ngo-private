import React from "react";
import Style from "./Index.module.css";

function Card({ donor }) {
  return (
    <div className={Style.cardWrapper}>
      <div className={Style.cards}>
        <h6>{donor.name}</h6>
        <div className={Style.reminderWrapper}>
          <div className={Style.reminder}>
            <i className="fa-solid fa-phone"></i>
            <span>{donor.phone}</span>
          </div>
          <button>Send Reminder</button>
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
