import React from "react";
import "./Index.css";

function TertiaryHeader() {
  const logo = localStorage.getItem("logo");
  return (
    <div className="headUpWrapper">
      <div className="headUpContainer">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <p className="navHeading">
          Together We Will, <br /> Aao Saath Chalein
        </p>
      </div>
    </div>
  );
}

export default TertiaryHeader;
