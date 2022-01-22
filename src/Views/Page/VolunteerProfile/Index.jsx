import React, { useState} from 'react';
import './Index.css';

import {useNavigate} from "react-router-dom";

function VolunteerPage() {
     const[data, setData] = useState({
          name : '',
          email: '',
          birth: '',
          interest: '',
     })
     const{name, email,birth,interest} = data; 

     const navigate = useNavigate();

     const eventHandler=(name)=>(e)=>{
          setData({ ...data, [name]:e.target.value})
     }
     const submitHandler=(e)=>{
          e.preventDefault();
          navigate('/profileExit')
          }
  return(
       <div>
          
          <div className='content'>
               <div className="form-floating mb-4">
                    <input 
                         type="text" 
                         className="form-control" 
                              value={name}
                                   onChange={eventHandler('name')} 
                              height="40" 
                         id="floatingInput" 
                         placeholder="Enter your name" />
                    <label for="floatingInput" >Name</label>
               </div>
               <div className="form-floating mb-3">
                    <input 
                         type="email" 
                         className="form-control" 
                              value={email}
                                   onChange={eventHandler('email')} 
                              id="floatingInput" 
                         placeholder="Email" />
                    <label for="floatingInput">Email</label>
               </div>
               <div className="form-floating lg-4 mb-3">
                    <input
                         type="date"
                         className="form-control"
                              value={birth}
                                   onChange={eventHandler('birth')}  
                              id="floatingInput" 
                         placeholder="Date of Birth(optional)" />
                    <label for="floatingInput">Date of Birth</label>
               </div>
               <div className="form-floating mb-3">
                    <input 
                         type="text" 
                         className="form-control" 
                              value={interest}
                                   onChange={eventHandler('interest')} 
                              id="floatingInput" 
                         placeholder="Social Interest(s)" />
                    <label for="floatingInput">Social Interest</label>
               </div>


               <div className='gender'>
                    <h2>Gender(Optional)</h2>
                    <div className="form-check form-check-inline">
                         <input 
                              className="form-check-input" 
                                   type="radio" 
                                        name="inlineRadioOptions" 
                                   id="inlineRadio1" 
                              value="option1" />
                         <label className="form-check-label" for="inlineRadio1">MALE</label>
                    </div>
                    <div className="form-check form-check-inline">
                         <input 
                              className="form-check-input" 
                                   type="radio" 
                                        name="inlineRadioOptions" 
                                   id="inlineRadio1" 
                              value="option1" />
                         <label className="form-check-label" for="inlineRadio1">FEMALE</label>
                    </div>
               </div>
          </div>
          <div className='buttonContainer'>
               <button className='button' type="button" onClick={submitHandler} >Submit</button>
          </div>
        
       </div>
    )
}

export default VolunteerPage;
