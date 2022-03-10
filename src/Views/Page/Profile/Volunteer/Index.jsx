import React, { useState } from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { volunteersReg } from "../../../../Api/VolunteerRegis/VolunteerRegis";
import { useForm } from "react-hook-form";
import {Link} from "react-router-dom";

function VolunteerPage() {
  const [data, setData] = useState({
    name: "",
    email: "",
    birth: "",
    interest: "",
    gender: "",
  });
  const { name, email, birth, interest, gender } = data;

  const navigate = useNavigate();
  const volunteerReg = () => {
    const volunteerdata = {
      name: data.name,
      email: data.email,
      dateOfBirth: data.birth,
      interest: data.interest,
      gender: data.gender,
    };
    return volunteerdata;
  };
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const eventHandler = (name) => (e) => {
    setData({ ...data, [name]: e.target.value });
    console.log(data);
  };
  

  const genderChange = (gender) => (e) => {
    setData({ [gender]: e.target.value });
    console.log(data);
  };

  const submitHandler = async (e) => {
    return volunteersReg.VolunteerRegis(volunteerReg());
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
            value={data.name}
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
            value={data.interest}
            onChange={eventHandler("interest")}
            placeholder="Social Interest(s)"
          />
          <h2>Gender (Optional)</h2>
          <div className={Style.radioButtons}>
            <div
              className={Style.male}
              onChange={eventHandler("gender")}
              value={gender}
            >
              <input
                type="radio"
                defaultChecked
                name="radio"
                value="option1"
                onChange={genderChange("gender")}
                value={gender}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className={Style.female}>
              <input type="radio" name="radio" value="option2" />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <Link to="/">
        <div className={Style.buttonContainer}>
        
          <button
            className="button"
            type="button"
            onClick={handleSubmit(submitHandler)}
          >
            Submit
          </button>
       
        </div>
        </Link>
      </div>
    </SecondaryLayout>
  );
}

export default VolunteerPage;
