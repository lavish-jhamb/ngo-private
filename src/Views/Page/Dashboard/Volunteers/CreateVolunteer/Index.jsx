import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../../Config/Router/URI";
import { volunteer } from "../../../../../Api/Volunteer/Volunteer";

function NewVolunteer() {
  // const [data,setData]=useState({
  //   Name:"",
  //   Email:"",
  //   Phone:"",
  //   Password:""
  // })
  // const {
  //   Name,
  //   Email,
  //   Phone,
  //   Password
  // }=data;
  // var values = {Name,
  //   Email,
  //   Phone,
  //   Password};
  // const [Name,setName] = useState("");
  // const [Email,setEmail] = useState("");
  // const [PhoneNumber,setPhoneNumber] = useState("");
  // const [Password,setPassword] = useState("");
  
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

  const loginHandler = (e) => {
    e.preventDefault();
    
    console.log(data);
    volunteer();
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
                <button  type="submit" onClick={loginHandler}>
                  Add Volunteer
                </button>
              </div>
          </div>
      </div>
    </SecondaryLayout>
  );
}

export default NewVolunteer;
