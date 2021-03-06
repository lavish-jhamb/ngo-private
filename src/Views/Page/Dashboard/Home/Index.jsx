import React,{useState,useEffect} from "react";
import MenuBarLayout from "../../../Layout/Menubar/Main";
import Style from "./Index.module.css";
import DashboardCard from "../../../../Components/DashboardCard/Index";
import { reportController } from "../../../../Api/Report/controller";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

const Dashboard = () => {
  const [data, setData] = useState();
  const [days, setDays] = useState();

  const navigate = useNavigate();

  const getReport = async (days) => {
    try {
      const response = await reportController.getReport(days);
      const data = response?.data;
      setData(data);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getReport();
  }, []);

  const handleSummary = (e) => {
    const days = e.target.value;
    setDays(days);
    getReport(days);
  };

  const navigateToDonations = () => {
    return navigate(uris.receipts)
  }

  const navigateToDonors = () => {
    return navigate(uris.donors)
  }

  return (
    <>
      <MenuBarLayout>
        <div className={Style.dashboardWrapper}>
          <h3 className="dashHeading">Dashboard</h3>
          <div className={Style.dashboardDaysCounterContainer}>
            <div className={Style.countContainer}>
              <i className={`far fa-clock ${Style.clockIcon}`}></i>
              <select onChange={handleSummary} className={Style.dropdown}>
                <option value="">Last 7 days</option>
                <option value="15">Last 15 days</option>
                <option value="30">Last 1 Month</option>
                <option value="90">Last 3 Months</option>
                <option value="180">Last 6 Months</option>
                <option value="365">Last 1 Year</option>
              </select>
            </div>
            <div className={Style.controlsContainer}>
              <i className="fa fa-chevron-up"></i>
              <i className="fa fa-chevron-down"></i>
            </div>
          </div>
          <p className={Style.lightText}>Showing results for "Last {days || 7} days"</p>
          <div className={Style.dashboardCardsContainer}>
            <DashboardCard donationHandler={navigateToDonations} donorHandler={navigateToDonors} data={data} />
          </div>
        </div>
      </MenuBarLayout>
    </>
  );
};

export default Dashboard;