import React from "react";
import Style from "./Index.module.css";
import { useNavigate } from "react-router-dom";
import { uris } from "../../Config/Router/URI";

function Card({ donor, dueDate }) {

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

  const navigate = useNavigate();
  
  const handleUpdateDonor = () => {
    navigate(uris.updateDonor, {
      state: {donor,dueDate},
    });
  };

  const handleCard = () => {
    navigate(uris.donorDetails, {
      state: {donor,dueDate},
    });
  };

  return (
    <div className={`container ${Style.MainContainer}`}>
      <div className={Style.cardWrapper}>
        <div className={Style.cardHeader}>
          <h6>{donor?.name}</h6>
          <i onClick={handleUpdateDonor} className="fas fa-pen"></i>
        </div>

        <div onClick={handleCard}>
          <div className={Style.cards}>
            <div className={Style.reminderWrapper}>
              <div className={Style.reminder}>
                <i className="fa-solid fa-phone"></i>
                <span>+91 {donor?.mobile}</span>
              </div>
            </div>

            <div className={Style.reminderWrapper}>
              <div className={Style.reminder}>
                <i
                  className={`${Style.locationIcon} fas fa-map-marker-alt`}
                ></i>{" "}
                <span className={Style.locationIcon}>
                  {donor?.address + ", " + donor?.city}
                </span>
              </div>
            </div>

            {dueDate && (
              <div className={Style.reminderWrapper}>
                <div className={Style.reminder}>
                  <i className="fas fa-calendar-alt"></i>{" "}
                  <span>
                    Due from{" "}
                    {(donor?.dueFromMonth && months[donor?.dueFromMonth - 1]) +
                      ", " +
                      donor?.dueFromYear}
                  </span>
                </div>
              </div>
            )}
          </div>
          <div className={Style.donationDetails}>
            <span>Last donation:</span>
            <span>
              ₹{" "}
              {new Intl.NumberFormat("en-IN", {
                maximumSignificantDigits: 3,
              }).format(donor?.lastDonation?.amount || 0)}
            </span>
            <span>({donor?.lastDonation?.donationDate})</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
