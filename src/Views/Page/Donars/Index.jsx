import React from "react";
import "./Index.css";
import Card from "../../../Components/Card/Index";
import { NavBar } from "../Menubar/Index";
import HeaderUp from "../../../Components/HeaderUp/Index";
import { Link } from "react-router-dom";

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
      <HeaderUp />
      <div className="donors">
        <h4>Manage Donors</h4>
        <div className="search-bar">
          <div className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search by name,phone..." />
          </div>
          <i className="fa-solid fa-calendar-days"></i>
        </div>
        {donarsList.map((donar) => (
          <Card donar={donar} />
        ))}
        <Link to="/create-donor">
          {/* css for addbtn : refer css of Manage Reciept  */}
          <button className="addBtn">
            <i className="bx bx-plus bx-lg"></i>
          </button>
        </Link>
        <NavBar />
      </div>
    </>
  );
}

export default Donars;
