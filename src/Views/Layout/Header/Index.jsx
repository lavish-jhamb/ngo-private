import React from 'react';
import Style from "./Index.module.css";
import Icon from "./Images/icon.png";

function Header() {
    return (
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src={Icon} alt="icon" />
        </div>
        <h1>AppName</h1>
      </header>
    );
}

export default Header;