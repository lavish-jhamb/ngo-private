import React from "react";
import HeaderUp from "../../../Components/HeaderUp/Index";
import { NavBar } from "../Menubar/Index";
import ManageRecData from "../ManageReceipts/ReceiptCard/ManageRecData";
import "./Index.css";
import { Link } from "react-router-dom";

const ManageVolunteer = () => {
  return (
    <>

      <HeaderUp />

      <div className="container px-4 pt-4">

        <div className="volunteerSearchBox">
          <h3 className="pb-2">Manage Volunteers</h3>

          <div className="searchReceiptVol">
            <i className="fas fa-search searchIconVol"></i>
            <input type="text" placeholder="Search by name, phone" />
          </div>
        </div>
        <div className="cardReceipts pt-4">
          <ManageRecData shareBtn={false} cardFooter={false} />
        </div>
      </div>

      <div>
        <Link to="/NewVolunteer">
          <button className="addBtnVol">
            <i className="bx bx-plus bx-md"></i>
          </button>
        </Link>
      </div>

      <NavBar />
    </>
  );
};

export default ManageVolunteer;
