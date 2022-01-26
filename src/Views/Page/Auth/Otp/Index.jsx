import React, { useState } from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";

function Otppage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const otpField = (e) => {
    const { name, value } = e.target;
    setOtp((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const [fieldName, fieldIndex] = name.split("_");

    if (parseInt(fieldIndex, 10) < 4) {
      const nextSibling = document.querySelector(
        `input[name=${fieldName}_${parseInt(fieldIndex, 10) + 1}]`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
      }
    }
  };

  const otpHandler = () => {
    navigate(uris.registration);
  };

  return (
    <PrimaryLayout>
      <div className={Style.otpContainer}>
        <div className={Style.otpWrapper}>
          <h2>Enter OTP</h2>
          <div className={Style.otpField}>
            <input
              value={otp.digit_1 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_1"
              autoComplete="off"
            />
            <input
              value={otp.digit_2 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_2"
              autoComplete="off"
            />
            <input
              value={otp.digit_3 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_3"
              autoComplete="off"
            />
            <input
              value={otp.digit_4 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_4"
              autoComplete="off"
            />
          </div>
          <button onClick={otpHandler} className={Style.otpButton}>
            Continue
          </button>
          <div className={Style.resendOtp}>
            <a href="!#">Resend OTP</a>
          </div>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default Otppage;
