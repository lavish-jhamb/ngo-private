import React from 'react';
import Style from "./Index.module.css";
import Icon from "./Images/icon.png";

function Header(props) {
    return (
      <header className={Style.header}>
        <div className={Style.iconContainer}>
          <img src={Icon} alt="icon" />
        </div>
        <h1>{props.header}</h1>
      </header>
    );
}

export default Header;