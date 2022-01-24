import React from "react";
import HeaderUp from "../../../Components/HeaderUp/Index";
import { NavBar } from "../Menubar/Index";
import ManageRecData from "./ReceiptCard/ManageRecData";
import "./Index.css";
import { useNavigate } from "react-router-dom";

const ManageReceipt = () => {

  const navigate = useNavigate();

  const createReceipt = () => {
    navigate("/create-receipt");
  }

  return (
    <>
      {/* HEADER */}

      <HeaderUp />

      <div className="container px-4 pt-4">
        {/* SEARCH BOX AND CARD_DATA */}

        <div className="receiptSearchBox">
          <h3 className="pb-2">Receipts</h3>

          {/* SEARCH_BOX */}

          <div className="searchReceipt">
            <i className="fas fa-search searchIcon"></i>
            <input type="text" placeholder="Search by name, phone" />
            <button
              className="d-flex justify-content-end filterIcon"
              id="button-addon2"
              type="button"
            >
              <i className="bx bx-filter-alt bx-md"></i>
            </button>
          </div>
        </div>

        {/* CARD_DATA */}

        <div className="cardReceipts pt-4">
          <ManageRecData shareBtn={true} cardFooter={true} />
        </div>
      </div>

      {/* ADD BUTTON */}

      <div>
        <button onClick={createReceipt} className=" addBtn">
          <i className="bx bx-plus bx-md"></i>
        </button>
      </div>

      {/* MENU_BAR */}

      <NavBar />
    </>
  );
};

export default ManageReceipt;
