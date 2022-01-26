import React from "react";
import Style from "./Index.module.css";

function DonorPopup(props) {

  const handleSubmit = () =>{
    props.togglePopup();
  }

  return (
    <>
      <div onClick={props.togglePopup} className={Style.reminderOverlay}></div>
        <div className={Style.reminderWindow}>
          <div className={Style.reminderWinHeader}>
            <h4>Donation period for automatic reminders</h4>
          </div>

          <div className={Style.reminderWinBody}>
            <div id={Style.timeDuration}>
              <select name="timeDuration">
                <option value="1_month">1 month</option>
                <option value="2_month">2 month</option>
                <option value="3_month">3 month</option>
                <option value="4_month">4 month</option>
              </select>
              <i className="fa fa-chevron-down"></i>
            </div>

            <p>
              Note: This donation period will be updated for selected donors.
            </p>

            <div className={Style.reminderBtnsGroup}>
              <button onClick={props.togglePopup} className={Style.reminderBtns}>Cancel</button>
              <button onClick={handleSubmit} className={Style.reminderBtns}>Update</button>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default DonorPopup;
