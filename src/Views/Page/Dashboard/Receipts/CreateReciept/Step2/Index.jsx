import React from "react";
import "./Index.css";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function CreateRecieptFormTwo(props) {
  const {
    prevStep,
    handleChange,
    filteredData,
    handleSubmit,
    onSubmitStepTwo,
    register,
    errors,
    values,
    selectCategory,
    isVisibleDropdown,
  } = props;

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
                      onChange: handleChange("category"),
                      required: {
                        value: true,
                        message: "category is required",
                      },
                    })}
                    value={values.category}
                  />
                  {errors.category && <p>{errors.category.message}</p>}
                  <div
                    className={`dropdown ${
                      isVisibleDropdown && filteredData.length > 0 && "show"
                    }`}
                  >
                    {filteredData.length > 0 &&
                      filteredData?.map((value, idx) => (
                        <div key={idx}>
                          <label htmlFor={`category_${idx}`}>
                            {value.name}
                          </label>
                          <input
                            id={`category_${idx}`}
                            type="radio"
                            name="category"
                            onClick={selectCategory}
                            value={value.name}
                            data-category={JSON.stringify(value)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="radioButtons">
                  <div className="renewal">
                    <input
                      type="radio"
                      name="renewal"
                      value={false}
                      defaultChecked
                      {...register("oneTimeDonor")}
                    />
                    <label htmlFor="renewal">Renewal</label>
                  </div>
                  <div className="oneTimeDonor">
                    <input
                      type="radio"
                      name="oneTimeDonor"
                      value={true}
                      {...register("oneTimeDonor")}
                    />
                    <label htmlFor="oneTimeDonor">One Time Donor</label>
                  </div>
                </div>
                <div className="dueFrom">
                  <h3>Due from :</h3>
                  <div className="inline-inputs">
                    <select required {...register("dueFromMonth")}>
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
                    <select required {...register("dueFromYear")}>
                      <option value="">Year</option>
                      {years.map((year, idx) => (
                        <option key={idx} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="offlineReceiptNo">
                    <div className="inputField">
                      <input
                        type="text"
                        placeholder="Offline Receipt No. (Optional)"
                      />
                    </div>
                    <a href="!#">Why Offline receipt no.?</a>
                  </div>
                  <div className="inputField">
                    <input
                      autoComplete="off"
                      type="text"
                      placeholder="Additional Note (Optional)"
                      {...register("description")}
                    />
                  </div>
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