import React from 'react';
import HeaderMain from "./Index.module.css";
import Icon from "./Images/angle-left.png";

function Headermain(props) {
    return (
        <header className={HeaderMain.header1}>
            <div role="button" className={HeaderMain.iconContainer1}>
                <img src={Icon} alt="icon" />
                
            </div>
            <h1>{props.headermain}</h1>
        </header>
    );
}

export default Headermain;