import React from "react";
import Style from "./Index.module.css";

function Card({ donar }) {
  return (
    <div className={Style.cardWrapper}>
      <div className={Style.cards}>
        <h6>{donar.name}</h6>
        <div className={Style.reminderWrapper}>
          <div className={Style.reminder}>
            <i className="fa-solid fa-phone"></i>
            <span>{donar.phone}</span>
          </div>
          <button>Send Reminder</button>
        </div>
      </div>
      <div className={Style.donationDetails}>
        <span>Last donation:</span>
        <span>Rs. {donar.donation}</span>
        <span>({donar.date})</span>
      </div>
    </div>
  );
}

export default Card;
