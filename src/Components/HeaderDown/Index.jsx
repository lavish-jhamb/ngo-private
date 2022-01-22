import React from "react";
import './Index.css'

function HeaderDown(props) {
  return (
    <div className="HdownHead">
      <div className="rpHead">
        <div className="container py-3">
          <div className="rpNavContent">
            <button className="rpHeadBtn">
              <i className="bx bx-chevron-left bx-lg"></i>
            </button>
            <span className="rpNavHeading">{props.heading}</span>
          </div>
        </div>
      </div>
      <div className="invertedCorner"></div>
    </div>
  );
}

export default HeaderDown;
