import React from "react";
import "./Index.css";
import Card from "../../../Components/Card/Index";
import { NavBar } from "../Menubar/NavBar";

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
      id: 4,
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
      id: 4,
      name: "Josephine Sans Auston",
      phone: "+91 7988065836",
      donation: "75000",
      date: "jan,11,2022",
    },
  ];

  return (
    <div className="donors">
      <h4>Manage Donors</h4>
      <div className="search-bar">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search by name,phone..." />
        </div>
        <i className="fa-solid fa-calendar-days"></i>
      </div>
      <div className="scroll">
      {donarsList.map((donar) => (
          <Card donar={donar} />
        ))}
      </div>
        <NavBar />
    </div>
  );
}

export default Donars;
