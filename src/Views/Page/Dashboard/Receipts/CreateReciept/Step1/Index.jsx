import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

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
    selectDonor,
  } = props;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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
                  type="text"
                  {...register("name", {
                    onChange: handleChange("name"),
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
                      <div key={idx}>
                        <label htmlFor={`donor_${idx}`}>
                          <p>{value.name}</p>
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
                    ))}
                </div>
              </div>
              <div className="spinner">
                <input
                  autoComplete="off"
                  placeholder="Phone number"
                  type="number"
                  {...register("mobileNumber", {
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                />
              </div>
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
            <button type="submit">
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