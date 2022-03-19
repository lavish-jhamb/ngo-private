import React, { useEffect, useState } from "react";
import "./Index.css";
import Card from "../../../../Components/DonorCard/Index";
import MenubarLayout from "../../../Layout/Menubar/Main";
import { donorsController } from "../../../../Api/Donors/controller";
import Spinner from "../../../../Components/Spinner/Index";

function Donars() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const [oneTimeDonor, setOneTimeDonor] = useState([]);
  const [freqDonor, setFreqDonor] = useState([]);
  const [handleDonor, setHandleDonor] = useState(true);

  const getDonors = async (isText,searchText) => {
    try {
      const response = await donorsController.getDonors(isText,searchText);
      const data = response?.data?.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    sortDonors(data);
  }, [data]);

  const sortDonors = (donorData) => {
    const oneTime = donorData?.filter((d) => d?.oneTimeDonor === true);
    setOneTimeDonor(oneTime);

    const freq = donorData?.filter((d) => d?.oneTimeDonor === false);
    setFreqDonor(freq);
  };

  useEffect(() => {
    getDonors();
    return () => setLoading(false);
  }, []);

  const handleFilter = (e) => {
    const searchText = e.target.value;
    if(isNaN(searchText) && searchText.length >= 3){
      getDonors(true,searchText)
    }else{
      if (searchText.length === 10) {
        getDonors(false,searchText);
      }
      if (searchText.length === 0) {
        getDonors();
      }
    }
  };

  return (
    <>
      <MenubarLayout>
        <div className="donors">
          <h4>Manage Donors</h4>
          <div className="search-bar">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input
                onChange={handleFilter}
                type="text"
                placeholder="Search by name, phone"
              />
            </div>
          </div>

          <div className="donorSortBtns">
            <button
              className={handleDonor ? "activeDonorBtn" : ""}
              onClick={() => setHandleDonor(true)}
            >
              One time donor
            </button>
            <button
              className={!handleDonor ? "activeDonorBtn" : ""}
              onClick={() => setHandleDonor(false)}
            >
              Frequent donor
            </button>
          </div>

          <div className="card">
            {loading && data?.length === 0 ? (
              <Spinner />
            ) : handleDonor ? (
              oneTimeDonor?.map((donor, idx) => (
                <Card key={idx} dueDate={false} donor={donor} />
              ))
            ) : (
              freqDonor?.map((donor, idx) => (
                <Card key={idx} dueDate={true} donor={donor} />
              ))
            )}
            {data?.length === 0 && !loading && (
              <p className="empty">Data not available</p>
            )}
          </div>

          {/* <Link to={uris.createDonors}>
            <button id="addBttn" className="addBtn">
              <i className="bx bx-plus bx-lg"></i>
            </button>
          </Link> */}
        </div>
      </MenubarLayout>
    </>
  );
}

export default Donars;
