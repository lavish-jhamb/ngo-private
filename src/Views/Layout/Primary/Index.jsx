import React from 'react';
import Style from "./Index.module.css";

function PrimaryHeader() {
    return (
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src="/resources/images/logo.png" alt="icon" />
        </div>
        <h1><span>NGO</span> Buddy</h1>
        <img src="/resources/images/invertedCorner.svg" alt="svg" />
      </header>
    );
}

export default PrimaryHeader;