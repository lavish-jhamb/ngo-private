import React, { useState } from "react";
import StepOne from "./Step1/Index";
import StepTwo from "./Step2/Index";
import StepThree from "./Step3/Index";
import { receiptController } from "../../../../../Api/Receipt/controller"

function MainCreateReciept() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    amount: "",
    description: "",
    dateOfBirth: "",
    email: "",
    gender: "",
    mobileNumber: "",
    name: "",
    panNumber: "",
    paymentMethod: "",
    address:""
  });

  const nextStep = () => {
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const handleChange = (input) => (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        [input]: e.target.value,
      };
    });
  };

  const formattedData = {
    amount: data.amount,
    description: data.description,
    donorInfo: {
      dateOfBirth: "31-12-2009",
      email: data.email,
      gender: 'Female',
      mobileNumber:data.mobileNumber,
      name:data.name,
      panNumber:data.panNumber
    },
    paymentMethod: data.paymentMethod
  }

  const createDonation = async () => {
    return receiptController.donation(formattedData)
  }

  const Steps = {
    1: StepOne,
    2: StepTwo,
    3: StepThree,
  };

  const ReceiptForm = Steps[page];

  return (
    <ReceiptForm
      nextStep={nextStep}
      prevStep={prevStep}
      values={data}
      handleChange={handleChange}
      createDonation={createDonation}
    />
  );
}
export default MainCreateReciept;
