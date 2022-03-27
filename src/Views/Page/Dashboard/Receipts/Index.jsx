import React from "react";
import "./Index.css";
import MenubarLayout from "../../../Layout/Menubar/Main";
import ReceiptCard from "../../../../Components/ReceiptCard/Index";
import { useLocation, useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { useEffect } from "react";
import { receiptController } from "../../../../Api/Receipt/controller";
import { useState } from "react";
import Spinner from "../../../../Components/Spinner/Index";

const ManageReceipt = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [receiptInput, setReceiptInput] = useState("");
  const navigate = useNavigate();

  const { state } = useLocation();
  const [donorName, setDonorName] = useState(state?.donorName);

  const createReceipt = () => {
    navigate(uris.createReceipt);
  };

  const getDonations = async (isText, mobile) => {
    try {
      const response = await receiptController.getDonations(isText, mobile);
      const data = response?.data?.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    if (donorName) {
      getDonations(true, donorName);
    } else {
      getDonations();
      return () => setLoading(false);
    }
  }, [donorName]);

  const handleFilter = (e) => {
    const searchText = e.target.value;
    if (isNaN(searchText) && searchText.length >= 3) {
      getDonations(true, searchText);
    } else {
      if (searchText.length === 10) {
        getDonations(false, searchText);
      }
      if (searchText.length === 0) {
        getDonations();
      }
    }
  };

  return (
    <>
      <MenubarLayout>
        <div className="manageRecContainer">
          <div className="receiptSearchBox">
            <h4 className="">Donation History</h4>
            <div className="searchReceipt">
              <i className="fas fa-search searchIcon"></i>
              <input
                onChange={(e) => {
                  setReceiptInput(e.target.value);
                  setDonorName("");
                  handleFilter(e);
                }}
                type="text"
                placeholder="Search by name, phone"
                value={donorName ? receiptInput || donorName : receiptInput}
              />
              <button className="filterIcon" id="button-addon2" type="button">
                <i className="bx bx-filter-alt bx-md"></i>
              </button>
            </div>
          </div>
          {loading && data?.length === 0 ? (
            <Spinner />
          ) : (
            data?.map((receipt, idx) => (
              <ReceiptCard
                key={idx}
                loading={loading}
                data={receipt}
                shareBtn={true}
                cardFooter={true}
                receipts={true}
              />
            ))
          )}
          {data?.length === 0 && !loading && (
            <p className="empty">Data not available</p>
          )}
          <div>
            <button onClick={createReceipt} className="addBtn">
              <i className="bx bx-plus bx-lg"></i>
            </button>
          </div>
        </div>
        <div className="paginate"></div>
      </MenubarLayout>
    </>
  );
};

export default ManageReceipt;
