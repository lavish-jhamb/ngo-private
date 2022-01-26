import React, { useState } from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

function VolunteerPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    birth: "",
    interest: "",
  });
  const { name, email, birth, interest } = data;

  const navigate = useNavigate();

  const eventHandler = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(uris.profileCreated);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="Volunteer Profile" handler={goBack}>
      <div className={Style.VolunteerProfile}>
        <div className={Style.form}>
          <input
            type="text"
            value={name}
            onChange={eventHandler("name")}
            placeholder="Name"
          />
          <input
            type="text"
            value={email}
            onChange={eventHandler("email")}
            placeholder="Email"
          />
          <input
            type="date"
            value={birth}
            onChange={eventHandler("birth")}
            placeholder="Date of Birth(optional)"
          />
          <input
            type="text"
            value={interest}
            onChange={eventHandler("interest")}
            placeholder="Social Interest(s)"
          />
          <h2>Gender (Optional)</h2>
          <div className={Style.radioButtons}>
            <div className={Style.male}>
              <input type="radio" defaultChecked name="radio" value="option1" />
              <label htmlFor="male">Male</label>
            </div>
            <div className={Style.female}>
              <input type="radio" name="radio" value="option2" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div className={Style.buttonContainer}>
          <button className="button" type="button" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default VolunteerPage;