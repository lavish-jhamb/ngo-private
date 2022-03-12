import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { uris } from "../../../Config/Router/URI";
import Style from "./Index.module.css";

function SecondaryHeader({ title, handler, editBtn, data }) {
  const navigate = useNavigate();

  const handleUpdateDonor = () => {
    navigate(uris.updateDonor, {
      state: data
    });
  };

  return (
    <div className={Style.layoutContainer}>
      <div onClick={handler} className={Style.svgContainer}>
        <img src="/resources/images/whiteBackArrow.png" alt="icon" />
      </div>
      <div className={Style.title}>
        <p>{title}</p>
      </div>
      {editBtn && (
        <div className={Style.editBtn}>
          <i onClick={handleUpdateDonor} className="fas fa-pen"></i>
        </div>
      )}
      <img src="/resources/images/invertedCorner.svg" alt="svg" />
    </div>
  );
}

export default SecondaryHeader;
