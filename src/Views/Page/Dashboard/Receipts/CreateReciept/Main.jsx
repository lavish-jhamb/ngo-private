import React, { useState, useEffect } from "react";
import StepOne from "./Step1/Index";
import StepTwo from "./Step2/Index";
import StepThree from "./Step3/Index";
import { receiptController } from "../../../../../Api/Receipt/controller";
import { getCookie } from "../../../../../Utils/cookie";

function MainCreateReciept() {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    amount: "",
    description: "",
    dateOfBirth: "",
    email: "",
    gender: "Male",
    mobileNumber: "",
    name: "",
    panNumber: "",
    paymentMethod: "",
    category:"",
    address: "",
    city:"",
    pinCode:"",
    state:""
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

  useEffect(() => {
    const fetchDonorInfo = async () => {
      setLoading(true);
      const id = getCookie("ngoExternalId");
      const response = await receiptController.searchDonorByMobile(
        id,
        data.mobileNumber
      );
      if (response.status === 200) {
        setData({
          amount: "",
          description: "",
          address:response?.data?.address,
          city:response?.data?.city,
          dateOfBirth: response?.data?.dateOfBirth,
          email: response?.data?.email,
          gender: response?.data?.gender,
          mobileNumber: data.mobileNumber,
          name: response?.data?.name,
          panNumber: response?.data?.panNumber,
          pinCode:response?.data?.pinCode,
          paymentMethod: "",
        });
      }
      setLoading(false);
    };
    if (parseInt(data?.mobileNumber?.length) === 10) {
      fetchDonorInfo();
    }
  }, [data.mobileNumber]);

  const formattedData = () => {
    const getDonorId = getCookie("getdonorId");
    const formattedData = {
      amount: data.amount,
      description: data.description,
      donorInfo: {
        donorId: getDonorId && getDonorId,
        address:data.address,
        city:data.city,
        dateOfBirth:data.dateOfBirth,
        email: data.email,
        gender: data.gender,
        mobileNumber: data.mobileNumber,
        name: data.name,
        panNumber: data.panNumber,
        pinCode: data.pinCode,
        state: data.state,
      },
      paymentMethod: data.paymentMethod,
    };
    return formattedData;
  };

  const createDonation = async () => {
    return receiptController.donation(formattedData());
  };

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
      loading={loading}
    />
  );
}

export default MainCreateReciept;
