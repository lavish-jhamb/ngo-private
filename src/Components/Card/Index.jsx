import React from "react";
import "./Index.css";

function Card({ donar }) {
  return (
      <div className="card-wrapper">
        <div className="card">
          <h6>{donar.name}</h6>
          <div className="reminder-wrapper">
            <div className="reminder">
              <i class="fa-solid fa-phone"></i>
              <span>{donar.phone}</span>
            </div>
            <button>Send Reminder</button>
          </div>
        </div>
        <div className="donation-details">
          <span>Last donation:</span>
          <span>{donar.donation}</span>
          <span>({donar.date})</span>
        </div>
      </div>
  );
}

export default Card;
