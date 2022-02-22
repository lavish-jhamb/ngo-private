import React, { useState } from "react";
import DonorPopup from "../../Views/Page/Dashboard/Donors/Popup/Index";
import Style from "./Index.module.css";
import { useLongPress } from "../../Utils/useLongPress";

function Card({ donor }) {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };

  if (popup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  const [check, setCheck] = useState(false);

  const checkboxHandler = (e) => {
    setCheck(e.target.checked);
  };

  const longPressProps = useLongPress({
    onLongPress: (e) => {
      const nodes = e.target.closest(".card").children;
      Array.from(nodes).forEach((node) => {
        node.children[0].style.display = "block";
        node.classList.add(Style.animatedCard);
      });
    },

    onClick: (e) => {
      const nodes = e.target.closest(".card").children;
      Array.from(nodes).forEach((node) => {
        node.children[0].style.display = "none";
        node.classList.remove(Style.animatedCard);
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
          <h6>{donor?.name}</h6>
          <div className={Style.reminderWrapper}>
            <div className={Style.reminder}>
              <i className="fa-solid fa-phone"></i>
              <span>+91 {donor?.mobile}</span>
            </div>
            <button id="btn" onClick={togglePopup}>
              Send Reminder
            </button>
            {popup && <DonorPopup togglePopup={togglePopup} />}
          </div>
        </div>
        <div className={Style.donationDetails}>
          <span>Last donation:</span>
          <span>Rs. {donor?.lastDonation?.amount}</span>
          <span>({donor?.lastDonation?.donationDate})</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
