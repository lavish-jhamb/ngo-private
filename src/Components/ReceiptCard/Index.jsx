import React, { useEffect, useState } from "react";
import receiptUsertData from "./UserDataReceipt.json";
import "./Index.css";
import { volunteer } from "../../Api/Volunteer/Volunteer";



const Receipt =  (props) => {
  const [set,setstatus]=useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  
  var result = [];
  useEffect(()=>{
    setstatus(volunteer.getVolunteer().then(response=>{console.log("response ",response.data);result=response?.data;return response.data;}));
    
  },[]) 
  
  console.log(result); 
  
  return (
    <div>
      {result?.data?.map((dat) => (
        <div  className="cardContent">
          <div className="cardHeader">
            <div className="cardTitle">
              <h4>
                <div className="">{dat.name}</div>
              </h4>
              <div>
                
                <button className="menuBtn">
                 <ul>
                    <i className="bx bx-dots-vertical-rounded"></i>
                  
            <a className="dropdown-item" href="#" ></a>
            
          </ul>
                </button>
              </div>
            </div>
            <div className="cardData">
              <p>
                <i className="fas fa-phone-alt cardIcon"></i> {dat.phone}
              </p>
              <p>
                <i className="fas fa-envelope cardIcon"></i> {dat.email}
              </p>
            </div>
          </div>

        
        </div>
      ))}
    </div>
  );
};

export default Receipt;
