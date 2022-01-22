import React from "react";
import Style from "./Index.module.css";
import ArrowIcon from "./Images/arrow.png";
import Svg from "./Images/Vector.svg";

function LayoutTwo() {
  return (
    <div className={Style.layoutContainer}>
      <div className={Style.svgContainer}>
        <img src={ArrowIcon} alt="icon" />
      </div>
      <div className={Style.title}>
        <p>NGO Profile</p>
      </div>
      <img src={Svg} alt="svg" />
    </div>
  );
}

export default LayoutTwo;
