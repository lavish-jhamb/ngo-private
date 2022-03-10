import React, { useState } from "react";
import DonorPopup from "../../Views/Page/Dashboard/Donors/Popup/Index";
import Style from "./Index.module.css";
import { useLongPress } from "../../Utils/useLongPress";

function Card({ donor }) {
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

  console.log();

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
          <div className={Style.cardHeader}>
            <h6>{donor?.name}</h6>
            <i className="fas fa-pen"></i>
          </div>
          <div className={Style.reminderWrapper}>
            <div className={Style.reminder}>
              <i className="fa-solid fa-phone"></i>
              <span>+91 {donor?.mobile}</span>
            </div>
          </div>

          <div className={Style.reminderWrapper}>
            <div className={Style.reminder}>
              <i className={`${Style.locationIcon} fas fa-map-marker-alt`}></i>{" "}
              <span className={Style.locationIcon}>
                {donor?.address + ", " + donor?.city}
              </span>
            </div>
          </div>

          <div className={Style.reminderWrapper}>
            <div className={Style.reminder}>
              <i className="fas fa-calendar-alt"></i>{" "}
              <span>
                Due from{" "}
                { (donor?.dueFromMonth && months[donor?.dueFromMonth - 1]) + ", " + donor?.dueFromYear}
              </span>
            </div>
          </div>
        </div>
        <div className={Style.donationDetails}>
          <span>Last donation:</span>
          <span>₹{donor?.lastDonation?.amount}</span>
          <span>({donor?.lastDonation?.donationDate})</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
