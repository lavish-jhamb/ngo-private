import React, { useEffect, useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../Config/Router/URI";
import { volunteer } from "../../../../../Api/Volunteer/Volunteer";
import { getCookie } from "../../../../../Utils/cookie";
function NewVolunteer() {
  const [data,setState] = useState({
    Name: "",
    Email:"",
    PhoneNumber: "",
    Password:""
  });
  let navigate = useNavigate();
  const [pwdVisibility, setpwdVisibility] = useState(false);
  const onchangehandler =({currentTarget: input})=>{
    data[input.name] = input.value;
    setState({...data});
    console.log(data);
  }
  const submitHandler =(e)=>{
    e.preventDefault();
    console.log(data); 
  }
  
    const volunteerdata=()=>{
      const getVolunteerId = getCookie("getvolunteerId");
      const volunteerdata ={
        volunteerId:getVolunteerId && getVolunteerId,
        name:data.Name,
        email:data.Email,
        mobileNumber:data.PhoneNumber,
        password:data.Password
      };
      return volunteerdata;
    };
    const loginHandler = async() => {
      
      console.log(data);
      return volunteer.createVolunteer(volunteerdata());
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
            <form className="newvolForm" onSubmit={submitHandler}>
            <input placeholder="Name" type="text"  name="Name" value={data.Name} onChange={onchangehandler}/>
              <input placeholder="Email" type="email" name="Email"  onChange={onchangehandler}/>
              <input placeholder="Phone number" type="tel" name="PhoneNumber" onChange={onchangehandler}/>
              <div className="newVolPwd">
              <input
                  placeholder="Password"
                  type={pwdVisibility ? "text" : "password"}
                  name="Password" 
                  onChange={onchangehandler}
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
          <button  type="submit" onClick= {loginHandler}>
                  Add Volunteer
                </button>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default NewVolunteer;
