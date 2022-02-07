import React from "react";
import "./Index.css";
import Card from "../../../../Components/DonorCard/Index";
import MenubarLayout from "../../../Layout/Menubar/Main";
import { Link } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

function Donars() {
  const donarsList = [
    {
      id: 1,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 2,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 3,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 4,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 5,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 6,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
    {
      id: 7,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
  ];

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
            {donarsList.map((donor) => (
              <Card key={donor.id} donor={donor} />
            ))}
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
