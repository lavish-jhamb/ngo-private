import React from 'react';
import Icon from '../../Layout/Header/Images/icon.png';
import Style from  "./Index.module.css";
import {useNavigate} from "react-router-dom"

function ProfileExit() {

  const navigate = useNavigate();

  const exitHandler=()=>{
    navigate("/");
  }
  return(
    <div>
      <div className={Style.body}>
        <header className={Style.header}>
            <div className={Style.iconContainer}>
                <img src={Icon} alt="icon" />
            </div>
                  <h1>AppName</h1>
            <div className={Style.pcontainer}>
                <p>An initiative by software Knights</p>
              </div>
          </header>
      </div>

      <div className={Style.bodyC}>
          <div className={Style.containerc}>
            <h1>Profile Created Successfully.</h1>
            
              <p>Your request has been sent to the verification team.<br/>You will be notified onceour team verify your profile.<br/>Thanks for the cooperation.</p>
            
            <div className={Style.buttonContainer}>
               <button type="submit" onClick={exitHandler}>Exit Application</button>
            </div>
          </div>
      </div>
      
    
      

    </div>
  )
}

export default ProfileExit;
