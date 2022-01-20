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
      <div className={Style.container}>
        <p className={Style.section}>Contact Details</p>
        <p>Step 2 of 2</p>

        <form onSubmit={handleSubmit}>
          <label>
            Phone Number (Official)
            <input
              type="number"
              name="phoneNumber"
              value={inputs.phoneNumber || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Website
            <input type="url" />
          </label>

          <p className={Style.section}>Address Details</p>

          <label>
            Address
            <input
              type="text"
              name="address"
              value={inputs.address || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            City
            <input
              type="text"
              name="city"
              value={inputs.city || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            Pincode
            <input
              type="number"
              name="pincode"
              value={inputs.pincode || ""}
              onChange={handleChange}
            />
          </label>

          <label>
            State
            <input
              type="text"
              name="state"
              value={inputs.state || ""}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </MainLayout>
  );
}

export default NgoProfileTwo;
