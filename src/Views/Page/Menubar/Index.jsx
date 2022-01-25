import React from "react";
import { NavLink } from "react-router-dom";
import "./Index.css";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`bx bx-home-alt ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
        <NavLink 
        to="/donors"
        className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i
              className={`fas fa-hand-holding-usd ${isActive && "active-icon"}`}
            ></i>
          )}
        </NavLink>
        <NavLink 
        to="/receipts"
        className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`fas fa-receipt ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
        <NavLink to="/volunteers"
        className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          {({ isActive }) => (
            <i className={`fas fa-users ${isActive && "active-icon"}`}></i>
          )}
        </NavLink>
      </nav>

      <div className="NavFooter"></div>
    </>
  );
};
