import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { donorsController } from "../../../../../Api/Donors/controller";
import { uris } from "../../../../../Config/Router/URI";
import notify from "../../../../../Utils/notify";

function CreateDonor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [disable, setDisable] = useState(false);

  const months = [
    "Jan_1",
    "Feb_2",
    "Mar_3",
    "Apr_4",
    "May_5",
    "Jun_6",
    "Jul_7",
    "Aug_8",
    "Sep_9",
    "Oct_10",
    "Nov_11",
    "Dec_12",
  ];
  const years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024"];

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const handleDisable = (e) => {
    setDisable(e.target.value);
  };

  const onSubmit = (data) => {
    const createDonor = donorsController.createDonor(data).then((response) => {
      if (response?.status === 200) {
        navigate(uris.donors);
      }
      else{
        notify.error(response?.message)
      }
      return response
    }).catch(err => err);

    notify.promise(createDonor, {
      pending: "Validating Data...",
      success: "Donor created",
      error: {
        render({ data }) {
          return `${data?.message}`
        },
      },
    });
  };

  return (
    <SecondaryLayout title="New Donor" handler={goBack}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="donor-details-wrapper">
          <div className="donor-details-container-1">
            <div className="donor-header-1">
              <h2>Donor Details</h2>
            </div>
            <div className="donor-details-1">
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
                  type="text"
                  onFocus={(e) => {
                    e.currentTarget.type = "date";
                    e.currentTarget.focus();
                  }}
                  placeholder="Date of Birth (Optional)"
                  {...register("dateOfBirth")}
                />
                {errors.dateOfBirth && <p>{errors.dateOfBirth.message}</p>}
              </div>
              <div className="radioButtons">
                <h2>Gender (Optional) :</h2>
                <div className="male radioBtnMale">
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
              <div className="address-details donor-address-details">
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
                <div className="inline-input">
                  <div className="">
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
                  <div className="">
                    <input
                      autoComplete="off"
                      type="text"
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
                  <div className="">
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
              <div className="radioButtons">
                <h2>Frequency :</h2>
                <div className="renewal donor-renewal">
                  <input
                    type="radio"
                    name="renewal"
                    value={false}
                    defaultChecked
                    {...register("oneTimeDonor")}
                  />
                  <label htmlFor="renewal">Renewal</label>
                </div>
                <div className="oneTimeDonor donor-oneTimeDonor">
                  <input
                    type="radio"
                    name="oneTimeDonor"
                    value={true}
                    {...register("oneTimeDonor", {
                      onChange: handleDisable,
                    })}
                  />
                  <label htmlFor="oneTimeDonor">One Time Donor</label>
                </div>
              </div>
              <div className="dueFrom">
                <h3>Due from :</h3>
                <div className="inline-inputs">
                  <select
                    disabled={disable === "true" ? true : false}
                    required
                    {...register("dueFromMonth")}
                  >
                    <option value="">Month</option>
                    {months.map((month, idx) => {
                      const monthNo = month.split("_")[1];
                      const monthName = month.split("_")[0];
                      return (
                        <option key={idx} value={monthNo}>
                          {monthName}
                        </option>
                      );
                    })}
                  </select>
                  <select
                    disabled={disable === "true" ? true : false}
                    required
                    {...register("dueFromYear")}
                  >
                    <option value="">Year</option>
                    {years.map((year, idx) => (
                      <option key={idx} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="reciept-button-1">
            <button type="submit">Create Donor</button>
          </div>
        </div>
      </form>
    </SecondaryLayout>
  );
}

export default CreateDonor;