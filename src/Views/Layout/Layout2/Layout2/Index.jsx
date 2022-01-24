import React from "react";
import Style from "./Index.module.css";
import ArrowIcon from "./Images/arrow.png";
import Svg from "./Images/Vector.svg";

function LayoutTwo({title,handler}) {
  return (
    <div className={Style.layoutContainer}>
      <div onClick={handler} className={Style.svgContainer}>
        <img src={ArrowIcon} alt="icon" />
      </div>
      <div className={Style.title}>
        <p>{title}</p>
      </div>
      <img src={Svg} alt="svg" />
    </div>
  );
}

export default LayoutTwo;
