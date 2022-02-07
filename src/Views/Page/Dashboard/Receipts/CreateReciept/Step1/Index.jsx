import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptForm(props) {
  const {
    values,
    handleChange,
    loading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    date
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
              <div className="spinner">
                <input
                  autoComplete="off"
                  placeholder="Phone number"
                  type="number"
                  {...register("mobileNumber", {
                    onChange: handleChange("mobileNumber"),
                    required: {
                      value: true,
                      message: "Phone number is required",
                    },
                  })}
                  value={values.mobileNumber}
                />
                {loading && (
                  <img
                    width="80"
                    src="/resources/images/spinner.gif"
                    alt="loading"
                  />
                )}
              </div>
              {errors.mobileNumber && <p>{errors.mobileNumber.message}</p>}
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="Name"
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}
                />
                {errors.name && <p>{errors.name.message}</p>}
              </div>
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="Email"
                  type="text"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is required",
                    },
                  })}
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
              <div className="inputField">
                <input
                  type="text"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Date of Birth"
                  {...register("dateOfBirth", {
                    required: {
                      value: true,
                      message: "dateOfBirth is required",
                    },
                  })}
                  ref={date}
                />
                {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
              </div>
              <div className="inputField">
                <input
                  autoComplete="off"
                  placeholder="Pan Number"
                  type="text"
                  {...register("panNumber", {
                    required: {
                      value: true,
                      message: "Pan Number is required",
                    },
                  })}
                />
                {errors.panNumber && <p>{errors.panNumber.message}</p>}
              </div>
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