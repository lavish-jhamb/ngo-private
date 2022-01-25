import React from "react";
import "./Index.css";

function HeaderDown(props) {
  return (
    <div className="headeownWrapper">
      <div className="headDownContainer">
        <div className="headDownContent">
          <button>
            <i className="bx bx-chevron-left bx-lg"></i>
          </button>
          <p>{props.heading}</p>
        </div>
      </div>
      <div className="invertedCorner"></div>
    </div>
  );
}

export default HeaderDown;
