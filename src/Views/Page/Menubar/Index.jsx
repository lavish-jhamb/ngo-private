import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Index.css";

export const NavBar = () => {
  const afterclick = (e) => {
    // let activeEle = document.getElementsByClassName("active");
    // activeEle.length && activeEle[0].classList.toggle("active");
    // e.target.classList.toggle('active');
  };

  let location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <nav className="nav">
        <Link
          to="/dashboard"
          className="nav__link"
          id="home"
          onClick={(e) => afterclick(e)}
        >
          <i
            className={
              location.pathname === "/dashboard"
                ? "active bx bx-home-alt nav__icon"
                : "bx bx-home-alt nav__icon"
            }
          ></i>
        </Link>

        <Link
          to="/donors"
          className="nav__link"
          id="history"
          onClick={(e) => afterclick(e)}
        >
          <i
            className={
              location.pathname === "/donors"
                ? "active fas fa-hand-holding-usd nav__icon"
                : "fas fa-hand-holding-usd nav__icon"
            }
          ></i>
        </Link>

        <Link
          to="/receipts"
          className="nav__link"
          id="receipt"
          onClick={(e) => afterclick(e)}
        >
          <i
            className={
              location.pathname === "/receipts" ||
              location.pathname === "/generatedreceipt"
                ? "active fas fa-receipt nav__icon"
                : "fas fa-receipt nav__icon"
            }
          ></i>
        </Link>

        <Link
          to="/volunteers"
          className="nav__link"
          id="userList"
          onClick={(e) => afterclick(e)}
        >
          <i
            className={
              location.pathname === "/volunteers"
                ? "active fas fa-users fa-lg nav__icon"
                : "fas fa-users fa-lg nav__icon"
            }
          ></i>
        </Link>
      </nav>
      <div className="footer"></div>
    </>
  );
};
