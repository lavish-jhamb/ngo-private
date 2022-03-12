import React, { useEffect, useState } from "react";
import "./Index.css";
import Card from "../../../../Components/DonorCard/Index";
import MenubarLayout from "../../../Layout/Menubar/Main";
import { Link, useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { donorsController } from "../../../../Api/Donors/controller";
import Spinner from "../../../../Components/Spinner/Index";

function Donars() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDonors = async (text) => {
    try {
      const response = await donorsController.getDonors(text);
      const data = response?.data?.data;
      setData(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    getDonors();
    return () => setLoading(false);
  }, []);

  const handleFilter = (e) => {
    const text = e.target.value;
    const newFilter = data?.filter((value) => {
      return value.name.toLowerCase().includes(text.toLowerCase());
    });
    setData(newFilter);
    if (text === "") {
      getDonors();
    }
  };

  // const navigate = useNavigate();

  // const handleCard = () => {
  //   navigate(uris.donorDetails, {
  //     state: data,
  //   });
  // };

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
            <i className="fa-solid fa-calendar-days"></i>
          </div>

          <div className="donorSortBtns">
            <button>One time donor</button>
            <button>Frequent donor</button>
          </div>

          <div className="card">
            {loading && data?.length === 0 ? (
              <Spinner />
            ) : (
              data?.map((donor, idx) => <Card key={idx} donor={donor} />)
            )}
            {data?.length === 0 && !loading && (
              <p className="empty">Data not available</p>
            )}
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
