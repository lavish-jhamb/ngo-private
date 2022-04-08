import React from "react";
import Style from "./Index.module.css";
import { useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../Layout/Secondary/Main";

function ProfileTwo(props) {
  const { prevStep, register, errors, handleSubmit, onSubmitStep2 } = props;

  const navigate = useNavigate();

  const prevPageHandler = () => {
    prevStep();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="NGO Profile" handler={goBack}>
      <div className={Style.container}>
        <form onSubmit={handleSubmit(onSubmitStep2)}>
          <div className={Style.formContainer}>
            <div className={Style.form}>
              <div className={Style.header}>
                <h2>
                  <img
                    onClick={prevPageHandler}
                    src="/resources/images/backArrow.png"
                    alt="icon"
                  />
                  Contact Details
                </h2>
                <p>Step 2 of 2</p>
              </div>
              <div className={Style.contactDetails}>
                <div className={Style.inputField}>
                  <input
                    type="number"
                    placeholder="Phone Number (Official)"
                    autoComplete="off"
                    {...register("phoneNo", {
                      required: {
                        value: true,
                        message: "Phone NO. is required",
                      },
                    })}
                  />
                  {errors.phoneNo && <p>{errors.phoneNo.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="Email (Official)"
                    autoComplete="off"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                    })}
                  />
                  {errors.Email && <p>{errors.Email.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="Website"
                    autoComplete="off"
                    {...register("website", {
                      required: {
                        value: true,
                        message: "Website is required",
                      },
                    })}
                  />
                  {errors.website && <p>{errors.website.message}</p>}
                </div>
              </div>
              <div className={Style.address}>
                <h2>Address Details</h2>
              </div>
              <div className={Style.addressDetails}>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="Address"
                    autoComplete="off"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "Address is required",
                      },
                    })}
                  />
                  {errors.address && <p>{errors.address.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="City"
                    autoComplete="off"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "City is required",
                      },
                    })}
                  />
                  {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="number"
                    placeholder="Pincode"
                    autoComplete="off"
                    {...register("pinCode", {
                      required: {
                        value: true,
                        message: "pincode is required",
                      },
                    })}
                  />
                  {errors.pinCode && <p>{errors.pinCode.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="state"
                    autoComplete="off"
                    {...register("state", {
                      required: {
                        value: true,
                        message: "State is required",
                      },
                    })}
                  />
                  {errors.state && <p>{errors.state.message}</p>}
                </div>
              </div>
            </div>
            <div className={Style.submitButton}>
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileTwo;
