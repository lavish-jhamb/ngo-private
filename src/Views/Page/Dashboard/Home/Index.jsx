import React from "react";
import MenuBarLayout from "../../../Layout/Menubar/Main";
import Style from "./Index.module.css";
import DashboardCard from "../../../../Components/DashboardCard/Index";
import { reportController } from "../../../../Api/Report/controller";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getReport = async () => {
      try {
        const response = await reportController.getReport();
        const data = response?.data;
        setData(data);
      } catch (error) {
        return error;
      }
    };
    getReport();
  },[]);

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
            <DashboardCard data={data} />
          </div>
        </div>
      </MenuBarLayout>
    </>
  );
};

export default Dashboard;