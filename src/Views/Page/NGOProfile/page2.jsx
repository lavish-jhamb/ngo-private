import React from "react";
import "./index.module.css";
import { useState } from "react";
import Style from "./index.module.css";
import MainLayout from "../../Layout/Main";

function NgoProfileTwo() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <MainLayout>
      <div className={Style.ngoProfileContainer}>
        <div className={Style.heading}>
        Contact Details
        <p>Step 2 of 2</p>
        </div>

        <form className={Style.ngoProfileForm} onSubmit={handleSubmit}>
          <label>
            <input
              placeholder="Phone Number (Official)"
              type="number"
              name="phoneNumber"
              value={inputs.phoneNumber || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              placeholder="website" 
              type="url"
              name="website"
              value={inputs.website || ""}
              onChange={handleChange}
            />
          </label>

          <p>Address Details</p>

          <label>
            <input
              placeholder="Address"
              type="text"
              name="address"
              value={inputs.address || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              placeholder="City"
              type="text"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input
              placeholder="Pincode"
              type="number"
              name="pincode"
              value={inputs.pincode || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            <input  
              placeholder="State"
              type="text"
              name="state"
              value={inputs.state || ""}
              onChange={handleChange}
            />
          </label>

          <button className={Style.btn} type="submit">Submit</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default NgoProfileTwo;
