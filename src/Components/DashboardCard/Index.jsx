import React from 'react';
import Style from './Index.module.css'

function DashboardCard({ title, value, icon }) {
  return (
    <div className={Style.dashboardCardContainer}>
        <div className={Style.dashboardHeader}>
            <img src={icon} alt="time icon" />
            <h2>
                {title}
            </h2>
        </div>
        <div className={Style.dashboardBody}>
            <div className={Style.leftContainer}>
                <span>
                    Total :
                </span>
                <span className={Style.blueText}>
                    { value }
                </span>
            </div>
            <div className={Style.rightContainer}>
                <button className={Style.detailsButton}>
                    View details
                </button>
            </div>
        </div>
    </div>
  )
}

export default DashboardCard;
