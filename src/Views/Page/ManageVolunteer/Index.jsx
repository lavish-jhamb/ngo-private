import React from "react";
import HeaderUp from "../../../Components/HeaderUp/Index";
import { NavBar } from "../Menubar/Index";
import ManageRecData from "../ManageReceipts/Card/ManageRecData";
import "./Index.css";

const ManageVolunteer = () => {
  return (
    <>
      {/* HEADER */}

      <HeaderUp />

      <div className="container px-4 pt-4">
        {/* SEARCH BOX AND CARD_DATA */}

        <div className="volunteerSearchBox">
          <h3 className="pb-2">Manage Volunteers</h3>

          {/* SEARCH_BOX */}

          <div className="searchReceiptVol">
            <i className="fas fa-search searchIconVol"></i>
            <input type="text" placeholder="Search by name, phone" />
          </div>
        </div>

        {/* CARD_DATA */}

        <div className="cardReceipts pt-4">
          <ManageRecData shareBtn={false} cardFooter={false} />
        </div>
      </div>

      {/* ADD BUTTON */}

      <div>
        <button className="addBtnVol">
          <i className="bx bx-plus bx-md"></i>
        </button>
      </div>

      {/* MENU_BAR */}

      <NavBar />
    </>
  );
};

export default ManageVolunteer;
