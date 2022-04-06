import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { donorsController } from "../../../../../../Api/Donors/controller";

function CreateRecieptForm(props) {
  const {
    handleChange,
    register,
    handleSubmit,
    onSubmit,
    errors,
    date,
    donorData,
    isVisibleDropdown,
    setIsVisibleDropdown,
    selectDonor,
    isDisable,
  } = props;
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [donorError, setDonorError] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const maxLengthCheck = (e) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength);
    }
  };

  const getDonorsLastDonationDetails = async (phoneNo) => {
    const response = await donorsController.getDonorsLastDonationDetails(
      phoneNo
    );
    return response;
  };

  const handleExistsCheck = async () => {
    const donorName = document.getElementsByTagName("input")[0].value;
    let lastDonorName = "";

    if (mobileNumber) {
      const response = await getDonorsLastDonationDetails(mobileNumber);
      lastDonorName = response?.data?.name;
    }

    if (lastDonorName === donorName) {
      setDonorError("");
    }
    if (mobileNumber && donorName !== lastDonorName) {
      setDonorError("Donor already exists with this mobile number");
    }
  };

  const handleMobileChange = async (e) => {
    setMobileNumber(e.target.value);
    const mobile = e.target.value;

    if (mobile.length === 10) {
      const response = await getDonorsLastDonationDetails(mobile);
      const lastDonorName = response?.data?.name;
      const donorName = document.getElementsByTagName("input")[0].value;

      if (lastDonorName && donorName !== lastDonorName) {
        setDonorError("Donor already exists with this mobile number");
      }
    } else {
      setDonorError("");
    }
  };

  return (
    <SecondaryLayout title="Create Receipt" handler={goBack}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="donor-details-wrapper-1">
          <div className="donor-details-container-1">
            <div className="donor-header-1">
              <h2>Donor Details</h2>
              <p>Step 1 of 2</p>
            </div>
            <div className="donor-details-1">
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="Name"
                  onChange={handleExistsCheck}
                  type="text"
                  {...register("name", {
                    onChange: handleChange("name"),
                    onBlur: handleExistsCheck,
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
                <div
                  className={`donor-dropdown ${
                    isVisibleDropdown && donorData?.length > 0 && `donor-show`
                  }`}
                >
                  {donorData.length > 0 &&
                    donorData?.map((value, idx) => (
                      <div key={idx} className="dropdownContainer">
                        <div>
                          <label htmlFor={`donor_${idx}`}>
                            <p>{value.name}</p>
                            <p>
                              <i className="fas fa-phone-alt cardIcon"></i>
                              {value.mobile}
                            </p>
                            <p>
                              <i className="fa-solid fa-location-dot"></i>
                              {value.address},{value.city},{value.state}
                            </p>
                          </label>
                          <input
                            id={`donor_${idx}`}
                            onClick={selectDonor}
                            type="radio"
                            name="donor"
                            data-donor={JSON.stringify(value)}
                          />
                        </div>
                        <div onClick={() => setIsVisibleDropdown(false)}>
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div className="spinner">
                <input
                  disabled={isDisable ? true : false}
                  autoComplete="off"
                  onInput={maxLengthCheck}
                  maxLength="10"
                  // value={mobileNumber}
                  placeholder="Phone number"
                  type="number"
                  {...register("mobileNumber", {
                    onChange: handleMobileChange,
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                />
              </div>
              {donorError && <p>{donorError}</p>}
              {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="Email (Optional)"
                  type="text"
                  {...register("email")}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="PAN No. (Optional)"
                  type="text"
                  {...register("panNumber")}
                />
                {errors.panNumber && <p>{errors.panNumber.message}</p>}
              </div>
              <div className="inputField">
                <input
                  type={date ? "date" : "text"}
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Date of Birth (Optional)"
                  {...register("dateOfBirth")}
                />
                {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
              </div>
              <div className="gender">
                <h2>Gender (Optional)</h2>
                <div className="radioButtons">
                  <div className="male">
                    <input
                      type="radio"
                      name="radio"
                      value="Male"
                      defaultChecked
                      {...register("gender")}
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className="female">
                    <input
                      type="radio"
                      name="radio"
                      value="Female"
                      {...register("gender")}
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                </div>
              </div>
              <div className="address-details">
                <h2>Address Details</h2>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    placeholder="Address"
                    type="text"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "address is required",
                      },
                    })}
                  />
                  {errors.address && <p>{errors.address.message}</p>}
                </div>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    placeholder="City"
                    type="text"
                    {...register("city", {
                      required: {
                        value: true,
                        message: "city is required",
                      },
                    })}
                  />
                  {errors.city && <p>{errors.city.message}</p>}
                </div>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    type="number"
                    placeholder="Pincode"
                    {...register("pinCode", {
                      required: {
                        value: true,
                        message: "pincode is required",
                      },
                    })}
                  />
                  {errors.pinCode && <p>{errors.pinCode.message}</p>}
                </div>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    placeholder="State"
                    type="text"
                    {...register("state", {
                      required: {
                        value: true,
                        message: "state is required",
                      },
                    })}
                  />
                  {errors.state && <p>{errors.state.message}</p>}
                </div>
              </div>
            </div>
          </div>
          <div className="reciept-button-1">
            <button disabled={donorError} type="submit">
              Next
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    </SecondaryLayout>
  );
}

export default CreateRecieptForm;
