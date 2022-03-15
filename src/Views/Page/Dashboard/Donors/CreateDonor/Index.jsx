import React, { useState } from "react";
import "./Index.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import ProgramForm from "../../../../../Components/ProgramForm/Index";
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const onSubmit = (data) => {
    const createDonor = donorsController
      .createDonor(data)
      .then((response) => {
        if (response?.status === 200) {
          navigate(uris.donors);
        } else {
          notify.error(response?.message);
        }
        return response;
      })
      .catch((err) => err);

    notify.promise(createDonor, {
      pending: "Validating Data...",
      success: "Donor created",
      error: {
        render({ data }) {
          return `${data?.message}`;
        },
      },
    });
  };

  const [category,setCategory] = useState([1]);

  const addProgramForm = () => {
    if(category.length < 3){
      setCategory((prev) => [...prev,category?.length+1])
    }
  }

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
              {category?.map((step) => (
                <ProgramForm key={step} steps={step} register={register} errors={errors} />
              ))}
              <button type="button" onClick={addProgramForm} className="programButton">Add Program</button>
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