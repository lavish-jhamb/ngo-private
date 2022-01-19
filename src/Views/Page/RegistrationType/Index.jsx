import React from "react";
import "./Index.css";
import MainLayout from "../../Layout/Main";

function RegistrationType() {
  return (
    <MainLayout>
      <div>
        <h4 className="regtype">Register as</h4>
        <div className="regtype1 ">
          <button className="btn2 btn1-primary my-3 " type="submit">
            <i className="fas fa-building"></i>
          </button>
          <button className="btn2 btn1-primary my-3 " type="submit">
            <i className="fas fa-users"></i>
          </button>
        </div>
        <div className="d-grid gap-2 col-8 mx-auto my-5 btn4">
          <button className="btn3 btn-primary " type="button">
            <i className="fas fa-share-alt"></i> Share this App
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default RegistrationType;
