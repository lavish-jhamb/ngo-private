import React from "react";
import MenuBarLayout from "../../../Layout/Menubar/Main";
import Style from "./Index.module.css";
import DashboardCard from "../../../../Components/DashboardCard/Index";
import rupeeIcon from "./images/rupee.svg";
import rupeeHandIcon from "./images/rupee_hand.svg";

const Dashboard = () => {
    return (
        <>
            <MenuBarLayout>
                <div className={Style.dashboardWrapper}>
                    <h3 className="dashHeading">Dashboard</h3>
                    <div className={Style.dashboardDaysCounterContainer}>
                        <div className={Style.countContainer}>
                            <i className={`far fa-clock ${Style.clockIcon}`}></i>
                            <span>Last 7 days</span>
                        </div>
                        <div className={Style.controlsContainer}>
                            <i className="fa fa-chevron-up"></i>
                            <i className="fa fa-chevron-down"></i>
                        </div>
                    </div>
                    <p className={Style.lightText}>Showing results for "Last 7 days"</p>
                    <div className={Style.dashboardCardsContainer}>
                        <DashboardCard
                            title="Donations"
                            value="Rs. 75,000"
                            icon={rupeeIcon}
                        />
                        <DashboardCard title="Donors" value="538" icon={rupeeHandIcon}/>
                    </div>
                </div>
            </MenuBarLayout>
        </>
    );
};

export default Dashboard;
