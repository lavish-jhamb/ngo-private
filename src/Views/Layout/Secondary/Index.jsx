import React from "react";
import Style from "./Index.module.css";

function SecondaryHeader({title,handler}) {
  return (
    <div className={Style.layoutContainer}>
      <div onClick={handler} className={Style.svgContainer}>
        <img src="/resources/images/whiteBackArrow.png" alt="icon" />
      </div>
      <div className={Style.title}>
        <p>{title}</p>
      </div>
      <img src="/resources/images/invertedCorner.svg" alt="svg" />
    </div>
  );
}

export default SecondaryHeader;
