import React from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";
import { uris } from "../../../../Config/Router/URI";
import { useForm } from "react-hook-form";

function VolunteerPage() {

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const dateOfBirth = data.dateOfBirth;
    data.dateOfBirth = dateOfBirth.split("-").reverse().join("-");
    console.log(data);
    navigate(uris.profileCreated);
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="Volunteer Profile" handler={goBack}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Style.VolunteerProfile}>
          <div className={Style.form}>
            <div className={Style.volunteerProfileInput}>
              <input
                autoComplete="off"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div className={Style.volunteerProfileInput}>
              <input
                autoComplete="off"
                type="email"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "email is required",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={Style.volunteerProfileInput}>
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
                    message: "dob is required",
                  },
                })}
                onBlur={(e) => {
                  e.currentTarget.type = "text";
                  e.currentTarget.blur();
                }}
              />
              {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
            </div>
            <input
              autoComplete="off"
              type="text"
              placeholder="Social Interest(s)"
              {...register("socialInterest")}
            />
            <h2>Gender (Optional)</h2>
            <div className={Style.radioButtons}>
              <div className={Style.male}>
                <input
                  type="radio"
                  defaultChecked
                  value="male"
                  id="male"
                  {...register("gender")}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className={Style.female}>
                <input
                  type="radio"
                  value="female"
                  id="female"
                  {...register("gender")}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className={Style.buttonContainer}>
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </SecondaryLayout>
  );
}

export default VolunteerPage;
