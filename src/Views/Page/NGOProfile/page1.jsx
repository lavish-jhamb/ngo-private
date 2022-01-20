import React from "react";
import "./index.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Style from "./index.module.css";
import MainLayout from "../../Layout/Main";

function NgoProfileOne() {
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  const handleNext = (event) => {
    navigate("/profile/2");
  };

  return (
    <MainLayout>
      <div className={Style.ngoProfileContainer}>
        
        <p className= {Style.ngoProfileSection} >NGO Details</p>
        <p>Step 1 of 2</p>

        <form className= {Style.ngoProfileForm} onSubmit={handleSubmit}>
          <label>
            <input className= {Style.inputField}
              placeholder="NGO Logo"
              type="file"
              name="ngoLogo"
              value={inputs.ngoLogo || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input className= {Style.inputField}
              placeholder="Reg. Certificate PDF"
              type="file"
              name="regCertificate"
              value={inputs.regCertificate || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input className= {Style.inputField}
              placeholder="NGO Name"
              type="text"
              name="ngoName"
              value={inputs.ngoName || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input className= {Style.inputField}
              placeholder="Owner Name"
              type="text"
              name="ownerName"
              value={inputs.ownerName || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input className= {Style.inputField}
              placeholder="Pan Number"
              type="text"
              name="panNumber"
              value={inputs.panNumber || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input className= {Style.inputField}
              placeholder="Registration Number"
              type="text"
              name="registrationNumber"
              value={inputs.registrationNumber || ""}
              onChange={handleChange}
            />
          </label>

          <button className={Style.btn} type="submit" onClick={handleNext}>
            Next
          </button>
        </form>
      </div>
    </MainLayout>
  );
}

export default NgoProfileOne;
