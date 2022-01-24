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

      <div className="manageVolContainer">
        <div className="volunteerSearchBox">
          <h4 className="">Manage Volunteers</h4>

          <div className="searchReceiptVol">
            <i className="fas fa-search searchIconVol"></i>
            <input type="text" placeholder="Search by name, phone" />
          </div>
        </div>
        <div className="cardReceipts">
          <ManageRecData shareBtn={false} cardFooter={false} />
        </div>
      </div>

      <div>
        <Link to="/NewVolunteer">
            {/* css for addbtn : refer css of Manage Reciept  */}
          <button className="addBtn">
            <i className="bx bx-plus bx-lg"></i>
          </button>
        </Link>
      </div>

      <NavBar />
    </>
  );
};

export default ManageVolunteer;
