import React from "react";
import "./Index.css";
import MenubarLayout from "../../../Layout/Menubar/Main";
import ReceiptCard from "../../../../Components/ReceiptCard/Index";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { useEffect } from "react";
import { receiptController } from "../../../../Api/Receipt/controller";
import { useState } from "react";
import Spinner from "../../../../Components/Spinner/Index";

const ManageReceipt = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const createReceipt = () => {
    navigate(uris.createReceipt);
  };

  const getDonations = async (mobile) => {
    try {
      const response = await receiptController.getDonations(mobile);
      const data = response?.data?.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getDonations();
    return () => setLoading(false);
  }, []);

  const handleFilter = (e) => {
    const mobile = e.target.value;
    if (mobile.length === 10) {
      getDonations(mobile);
    }
    if (mobile.length === 0) {
      getDonations();
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
                onChange={handleFilter}
                type="text"
                placeholder="Search by name, phone"
              />
              <button className="filterIcon" id="button-addon2" type="button">
                <i className="bx bx-filter-alt bx-md"></i>
              </button>
            </div>
          </div>
          {loading && data?.length === 0 ? (
            <Spinner />
          ) : (
            data?.map((reciept, idx) => (
              <ReceiptCard
                key={idx}
                loading={loading}
                data={reciept}
                shareBtn={true}
                cardFooter={true}
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
        <div className="paginate">
        </div>
      </MenubarLayout>
    </>
  );
};

export default ManageReceipt;