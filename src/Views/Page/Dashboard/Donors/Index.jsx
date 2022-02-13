import React, { useEffect, useState } from "react";
import "./Index.css";
import Card from "../../../../Components/DonorCard/Index";
import MenubarLayout from "../../../Layout/Menubar/Main";
import { Link } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { donorsController } from "../../../../Api/Donors/controller";
import Spinner from "../../../../Components/Spinner/Index";

function Donars() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getDonors = async () => {
      try {
        const response = await donorsController.getDonors();
        const data = response?.data?.data;
        setData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return error;
      }
    };
    getDonors();

    return () => setLoading(false);
  }, []);

  return (
    <>
      <MenubarLayout>
        <div className="donors">
          <h4>Manage Donors</h4>
          <div className="search-bar">
            <div className="search">
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder="Search by name, phone" />
            </div>
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="card">
            {loading && data?.length === 0? (
              <Spinner/>
            ) : (
              data?.map((donor, idx) => (<Card key={idx} donor={donor} />))
            )}
          {(data?.length === 0 && !loading) && <p className="empty">Data not available</p>}
          </div>
          <Link to={uris.createDonors}>
            <button id="addBttn" className="addBtn">
              <i className="bx bx-plus bx-lg"></i>
            </button>
          </Link>
        </div>
      </MenubarLayout>
    </>
  );
}

export default Donars;