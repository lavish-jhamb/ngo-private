import React, { useState } from "react";
import "./Index.css";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layout/Layout2/Main";
import Icon from "./icon_feather_eye.png";

function NewVolunteer() {
  let navigate = useNavigate();
  const [pwdVisibility, setpwdVisibility] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const pwdHandler = (e) => {
    e.preventDefault();
    setpwdVisibility(!pwdVisibility);
  };

  const goBack = () => {
    navigate(-1)
  }

  return (
      <MainLayout title="New Volunteer" handler={goBack}>
        <div className="newVolContainer container px-5">
          <div className="newVolFormContainer">
            <div>
              <form className="newvolForm">
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
                <input placeholder="Phone number" type="number" />
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
      </MainLayout>
  );
}

export default NewVolunteer;
