import React from 'react';
import Style from "./Index.module.css";

function Spinner() {
    return (
        <div className={Style.spinner}>
            <div className={Style.imageContainer}>
                <img src="/resources/images/spinner.gif" alt="spinner" />
            </div>
        </div>
    );
}

export default Spinner;