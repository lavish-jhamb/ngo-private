import React, { useState } from "react";
import Style from "./Index.module.css";
import { useLongPress } from "../../Utils/useLongPress";

function Card({ donor }) {
  const [check, setCheck] = useState(false);

  const checkboxHandler = (e) => {
    setCheck(e.target.checked);
  };

  const longPressProps = useLongPress({
    onLongPress: (e) => {
      const nodes = e.target.closest(".card").children;
      Array.from(nodes).forEach((node) => {
        node.children[0].style.display = "block";
      });
    },

    onClick: (e) => {
      const nodes = e.target.closest(".card").children;
      Array.from(nodes).forEach((node) => {
        node.children[0].style.display = "none";
      });
    },
  });

  return (
    <div className={`container ${Style.MainContainer}`}>
      <div className={Style.checkbox}>
        <input
          type="checkbox"
          name="checkbox"
          onChange={checkboxHandler}
          value={check}
        />
      </div>
      <div {...longPressProps} className={Style.cardWrapper}>
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
    </div>
  );
}

export default Card;
