import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../Config/Router/URI";
import { volunteerController } from "../../../../../Api/Volunteer/controller";

function NewVolunteer() {
  let navigate = useNavigate();

  const [phoneNo, setPhoneNo] = useState("");
  const [error, setError] = useState("");

  const addNgoVolunteer = (phoneNo) => {
    const mobile = "+91" + phoneNo;

    volunteerController
      .addNgoVolunteer(mobile)
      .then((response) => {
        navigate(uris.volunteer);
      })
      .catch((error) => {
        return error;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNo.length <= 9) {
      return setError("Phone Number must be 10 digits long");
    }

    addNgoVolunteer(phoneNo);

    console.log("phone: ", phoneNo);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="New Volunteer" handler={goBack}>
      <form onSubmit={handleSubmit}>
        <div className="newVolunteerContainer">
          <div className="newVolunteerInput">
            <input
              type="number"
              placeholder="Phone Number"
              value={phoneNo}
              onChange={(e) => {
                e.target.value.length === 11
                  ? setPhoneNo(e.target.value.slice(0, 10))
                  : setPhoneNo(e.target.value);

                setError("");
              }}
            />
            {error && <p>{error}</p>}
          </div>
          <div className="newVolunteerBtn">
            <button type="submit">Add Volunteer</button>
          </div>
        </div>
      </form>
    </SecondaryLayout>
  );
}

export default NewVolunteer;
