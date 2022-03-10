import React, { useEffect, useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../Config/Router/URI";
import { volunteer } from "../../../../../Api/Volunteer/Volunteer";
import { getCookie } from "../../../../../Utils/cookie";
import {Link} from "react-router-dom";
function NewVolunteer() {
  const [data, setState] = useState({
    PhoneNumber: "",
  });
  let navigate = useNavigate();
  const createvolunteers = () => {
    navigate(uris.volunteer);
  };

  const onchangehandler = ({ currentTarget: input }) => {
    data[input.name] = input.value;
    setState({ ...data });
    
  };
  const submitHandler = (e) => {
    e.preventDefault();
    
  };

  const volunteerdata = () => {
    const getVolunteerId = getCookie("getvolunteerId");
    const volunteerdata = {
      volunteerId: getVolunteerId && getVolunteerId,

      mobileNumber: data.PhoneNumber,
    };
    return volunteerdata;
  };

  const loginHandler = async () => {
    
    return await volunteer.createVolunteer(volunteerdata());
  };

  const goBack = () => {
    navigate(-1);
  };
  return (
    <SecondaryLayout title="New Volunteer" handler={goBack}>
      <div className="newVolContainer">
        <div className="newVolFormContainer">
          <div>
            <form className="newvolForm" onSubmit={submitHandler}>
              <input
                placeholder="Phone number"
                type="tel"
                name="PhoneNumber"
                onChange={onchangehandler}
              />
            </form>
          </div>
          <Link to="/dashboard/volunteer">
          <div className="newVolAddBtn">
            <button type="submit" onClick={loginHandler}>
              Add Volunteer
            </button>
          </div>
          </Link>
        </div>
      </div>
    </SecondaryLayout>
  );
}
export default NewVolunteer;
