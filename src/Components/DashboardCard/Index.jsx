import React from "react";
import Style from "./Index.module.css";

function DashboardCard({data}) {
  return (
    <>
      <div className={Style.dashboardCardContainer}>
        <div className={Style.dashboardHeader}>
          <img src="/resources/images/rupee_hand.svg" alt="time icon" />
          <h2>Donations</h2>
        </div>
        <div className={Style.dashboardBody}>
          <div className={Style.leftContainer}>
            <span>Total :</span>
            <span className={Style.blueText}>Rs {data?.totalAmount || '...'}</span>
          </div>
          <div className={Style.rightContainer}>
            <button className={Style.detailsButton}>View details</button>
          </div>
        </div>
      </div>
      <div className={Style.dashboardCardContainer}>
        <div className={Style.dashboardHeader}>
          <img src="/resources/images/rupee.svg" alt="time icon" />
          <h2>Donors</h2>
        </div>
        <div className={Style.dashboardBody}>
          <div className={Style.leftContainer}>
            <span>Total :</span>
            <span className={Style.blueText}>{data?.totalDonors || '...'}</span>
          </div>
          <div className={Style.rightContainer}>
            <button className={Style.detailsButton}>View details</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardCard;