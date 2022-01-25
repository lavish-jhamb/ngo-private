import React, { useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import Icon from "./icon_feather_eye.png";
import SecondaryLayout from "../../../../Layout/Secondary/Main";

function NewVolunteer() {
  let navigate = useNavigate();
  const [pwdVisibility, setpwdVisibility] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/volunteers");
  };

  const pwdHandler = (e) => {
    e.preventDefault();
    setpwdVisibility(!pwdVisibility);
  };

  return (
    <SecondaryLayout title="New Volunteer">
      <div className="newVolContainer">
        <div className="newVolFormContainer">
          <div>
            <form className="newvolForm">
              <input placeholder="Name" type="text" />
              <input placeholder="Email" type="email" />
              <input placeholder="Phone number" type="tel" />
              <div className="newVolPwd">
                <input
                  placeholder="Password"
                  type={pwdVisibility ? "text" : "password"}
                />
                <button onClick={pwdHandler}>
                  {pwdVisibility ? (
                    <img src={Icon} alt="logo" />
                  ) : (
                    <i className="bx bx-hide"></i>
                  )}
                </button>
              </div>
            </form>
          </div>
          <div className="newVolAddBtn">
            <button onClick={loginHandler} type="submit">
              Add Volunteer
            </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default NewVolunteer;
