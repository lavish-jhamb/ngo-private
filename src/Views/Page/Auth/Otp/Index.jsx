import React, { useEffect, useState } from "react";
import Style from "./Index.module.css";
import PrimaryLayout from "../../../Layout/Primary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { configureRecaptcha , onSignInSubmit } from "../../../../Firebase/auth";
import notify from "../../../../Utils/notify";

function Otppage() {
  const [otp, setOtp] = useState("");
  const [count, setCount] = useState(10);
  const [flag, setFlag] = useState(true);

  const navigate = useNavigate();

  const otpField = (e) => {
    const { name, value } = e.target;
    setOtp((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    const [fieldName, fieldIndex] = name.split("_");

    if (parseInt(fieldIndex, 10) < 6) {
      const nextSibling = document.querySelector(
        `input[name=${fieldName}_${parseInt(fieldIndex, 10) + 1}]`
      );

      if (nextSibling !== null) {
        nextSibling.focus();
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

  const resendHandler = () => {
    const contact = localStorage.getItem("contact");
    onSignInSubmit(contact,'otp');
  }

  const otpHandler = () => {
    const values = Object.values(otp).map((val) => val);
    const userOtp = values.join("");
    const verifyingOtp = window.confirmationResult
      .confirm(userOtp)
      ?.then((result) => {
        const firebaseToken = result?.user?.accessToken;
        document.cookie = `firebaseToken=${firebaseToken};domain=localhost;secure`;
        document.cookie = `firebaseToken=${firebaseToken};domain=ngo-donation-management.netlify.app;secure`;
        navigate(uris.registration);
      })
      .catch(() => {
        notify.error("OTP didn't match", { toastId: "otp-id" });
      });

    notify.promise(verifyingOtp, {
      pending: "Verifying OTP..",
      success: {
        render({data}){
          return data?.user?.accessToken && 'OTP verified';
        }
      },
    });
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
            <input
              value={otp.digit_5 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_5"
              autoComplete="off"
            />
            <input
              value={otp.digit_6 || ""}
              onChange={otpField}
              maxLength="1"
              type="text"
              name="digit_6"
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
        </div>
      </div>
    </PrimaryLayout>
  );
}

export default Otppage;
