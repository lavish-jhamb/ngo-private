import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../Config/Router/URI";

function NewVolunteer() {
  let navigate = useNavigate();
  const [pwdVisibility, setpwdVisibility] = useState(false);

  const loginHandler = (e) => {
    e.preventDefault();
    navigate(uris.volunteer);
  };

  const pwdHandler = (e) => {
    e.preventDefault();
    setpwdVisibility(!pwdVisibility);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="New Volunteer" handler={goBack}>
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
                    <img src="/resources/images/eye.png" alt="logo" />
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
