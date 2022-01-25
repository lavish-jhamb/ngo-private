import React from 'react';
import Style from "./Index.module.css";
import Icon from "./Images/icon.png";
import Svg from "./Images/Vector.svg";

function PrimaryHeader() {
    return (
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src={Icon} alt="icon" />
        </div>
        <h1>AppName</h1>
        <img src={Svg} alt="svg" />
      </header>
    );
}

export default PrimaryHeader;