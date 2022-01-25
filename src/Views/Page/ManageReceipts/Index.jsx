import React from "react";
import HeaderUp from "../../../Components/HeaderUp/Index";
import { NavBar } from "../Menubar/Index";
import ManageRecData from "./ReceiptCard/ManageRecData";
import { useNavigate } from "react-router-dom";
import "./Index.css";

const ManageReceipt = () => {
  const navigate = useNavigate();

  const createReceipt = () => {
    navigate("/create-receipt");
  };

  return (
    <>
      <HeaderUp />

      <div className="manageRecContainer">
        <div className="receiptSearchBox">
          <h4 className="">Manage Receipts</h4>

          <div className="searchReceipt">
            <i className="fas fa-search searchIcon"></i>
            <input type="text" placeholder="Search by name, phone" />
            <button className="filterIcon" id="button-addon2" type="button">
              <i className="bx bx-filter-alt bx-md"></i>
            </button>
          </div>
        </div>

        <div className="cardReceipts">
          <ManageRecData shareBtn={true} cardFooter={true} />
        </div>

        <div>
          <button onClick={createReceipt} className="addBtn">
            <i className="bx bx-plus bx-lg"></i>
          </button>
        </div>
      </div>

      <NavBar />
    </>
  );
};

export default ManageReceipt;
