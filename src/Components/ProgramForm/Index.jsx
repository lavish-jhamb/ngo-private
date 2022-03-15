import React from "react";
import "./Index.css";

function ProgramDetails({register,errors,steps}) {
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
  return (
    <>
      <div className="program-details-card">
        <h2>Program Details {steps}</h2>
        <div className="input">
          <input
            autoComplete="off"
            type="text"
            placeholder="Add program"
            {...register("program")}
          />
        </div>
        <div className="input">
          <input
            autoComplete="off"
            type="text"
            placeholder="Amount"
            {...register("amount")}
          />
        </div>
        <div className="dueFrom">
          <div className="inline-inputs">
            <select {...register("dueFromMonth")}>
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
            <select {...register("dueFromYear")}>
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
    </>
  );
}

export default ProgramDetails;
