import React from "react";
import "./Index.css";
import { NavLink } from "react-router-dom";
import { uris } from "../../../Config/Router/URI";

function Menubar() {
  return (
    <>
      <nav id="nav" className="nav">
        <NavLink
          to={uris.dashboard}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`bx bx-home-alt ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
        <NavLink
          to={uris.donors}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i
              className={`fas fa-hand-holding-usd ${isActive && "active-icon"}`}
            ></i>
          )}
        </NavLink>
        <NavLink
          to={uris.receipts}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`fas fa-receipt ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
        <NavLink
          to={uris.volunteer}
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`fas fa-users ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
      </nav>
      <div className="menu-footer"></div>
    </>
  );
}

export default Menubar;
