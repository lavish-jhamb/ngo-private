import React from 'react';
import Style from "./Index.module.css";

function PrimaryHeader() {
    return (
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src="/resources/images/whiteIcon.png" alt="icon" />
        </div>
        <h1>AppName</h1>
        <img src="/resources/images/invertedCorner.svg" alt="svg" />
      </header>
    );
}

export default PrimaryHeader;