import React, { useEffect, useState } from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import {
  configureRecaptcha,
  onSignInSubmit,
  otpVerification,
} from "../../../../Firebase/auth";

function Otppage() {
  const [otp, setOtp] = useState("");
  const [count, setCount] = useState(60);
  const [flag, setFlag] = useState(true);

  const navigate = useNavigate();

  const otpField = (e) => {
    const { name, value, maxLength } = e.target;
    if (e.target.value.length <= maxLength) {
      setOtp((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const inputFocus = (e) => {
    if (e.key === "Delete" || e.key === "Backspace") {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (count === 0) {
        setFlag(false);
        return;
      }
      setCount((count) => count - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [count]);

  useEffect(() => {
    configureRecaptcha();

    return () => {
      window.recaptchaVerifier.clear();
    };
  }, []);

  const resendHandler = (e) => {
    e.preventDefault();
    const contact = localStorage.getItem("contact");
    onSignInSubmit(contact);
  };

  const otpHandler = (e) => {
    e.preventDefault();
    const values = Object.values(otp).map((val) => val);
    const userOtp = values.join("");
    otpVerification(userOtp, navigate);
  };

  return (
    <PrimaryLayout>
      <div className={Style.otpContainer}>
        <div className={Style.otpWrapper}>
          <form>
            <h2>Enter OTP</h2>
            <div className={Style.otpField}>
              <input
                value={otp.digit_1 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_1"
                tabIndex="1"
                autoComplete="off"
              />
              <input
                value={otp.digit_2 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_2"
                tabIndex="2"
                autoComplete="off"
              />
              <input
                value={otp.digit_3 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_3"
                tabIndex="3"
                autoComplete="off"
              />
              <input
                value={otp.digit_4 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_4"
                tabIndex="4"
                autoComplete="off"
              />
              <input
                value={otp.digit_5 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_5"
                tabIndex="5"
                autoComplete="off"
              />
              <input
                value={otp.digit_6 || ""}
                onChange={otpField}
                onKeyUp={inputFocus}
                maxLength="1"
                type="number"
                name="digit_6"
                tabIndex="6"
                autoComplete="off"
              />
            </div>
            <button onClick={otpHandler} className={Style.otpButton}>
              Continue
            </button>
            <div className={Style.resendOtp}>
              <button
                id="sign-in-button"
                className={!flag ? Style.active : Style.disabled}
                onClick={resendHandler}
                disabled={!flag ? false : true}
              >
                Resend OTP
              </button>
              {flag && <p>didn't receive otp? wait for {count}s</p>}
            </div>
          </form>
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default Otppage;