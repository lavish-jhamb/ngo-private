import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptFormTwo(props) {
  const {prevStep, handleSubmit, onSubmitStepTwo, register, errors } =
    props;

  const navigate = useNavigate();

  const prevHandler = () => {
    prevStep();
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <SecondaryLayout title="Create Receipt" handler={goBack}>
        <form onSubmit={handleSubmit(onSubmitStepTwo)}>
          <div className="donor-details-wrapper">
            <div className="donor-details-container">
              <div className="donor-header">
                <h2>
                  <img
                    onClick={prevHandler}
                    src="/resources/images/backArrow.png"
                    alt="arrow"
                  />
                  Donation Details
                </h2>
                <p>Step 2 of 2</p>
              </div>
              <div className="donor-details">
                <div className="inputField">
                  <input
                    autoComplete="off"
                    placeholder="Amount (in Rs.)"
                    type="number"
                    {...register("amount", {
                      required: {
                        value: true,
                        message: "amount is required",
                      },
                    })}
                  />
                  {errors.amount && <p>{errors.amount.message}</p>}
                </div>
                <div className="inputField">
                  <select
                    required
                    {...register("paymentMethod", {
                      required: {
                        value: true,
                        message: "paymentMethod is required",
                      },
                    })}
                  >
                    <option value="">Select Payment Method</option>
                    <option value="Cash">Cash</option>
                    <option value="Online">Online</option>
                    <option value="Credit/Debit Card">Credit/Debit Card</option>
                    <option value="Cheque">Cheque</option>
                  </select>
                  {errors.paymentMethod && (
                    <p>{errors.paymentMethod.message}</p>
                  )}
                </div>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    type="text"
                    placeholder="Select category"
                    {...register("category", {
                      required: {
                        value: true,
                        message: "category is required",
                      },
                    })}
                  />
                  {errors.category && <p>{errors.category.message}</p>}
                </div>
                <div className="inputField">
                  <input
                    autoComplete="off"
                    placeholder="Additional Note (Optional)"
                    type="text"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is required",
                      },
                    })}
                  />
                  {errors.description && <p>{errors.description.message}</p>}
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
            <div className="reciept-button">
              <button type="submit">
                Create Reciept
                <span>
                  <i className="fas fa-chevron-right"></i>
                </span>
              </button>
            </div>
          </div>
        </form>
      </SecondaryLayout>
    </>
  );
}

export default CreateRecieptFormTwo;