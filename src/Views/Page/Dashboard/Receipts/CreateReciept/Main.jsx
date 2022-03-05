import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./Step1/Index";
import StepTwo from "./Step2/Index";
import StepThree from "./Step3/Index";
import { receiptController } from "../../../../../Api/Receipt/controller";
import { ngoCategoryController } from "../../../../../Api/NgoCategory/controller";
import { donorsController } from "../../../../../Api/Donors/controller";

function MainCreateReciept() {
  const [page, setPage] = useState(1);
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const [donorId, setDonorId] = useState("");
  const [donorData, setDonorData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [data, setData] = useState({
    amount: "",
    description: "",
    dateOfBirth: "",
    dueFromMonth: "",
    dueFromYear: "",
    email: "",
    gender: "",
    mobileNumber: "",
    name: "",
    oneTimeDonor: "",
    panNumber: "",
    paymentMethod: "",
    category: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const nextStep = () => {
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const selectCategory = (e) => {
    setData((prevData) => {
      return {
        ...prevData,
        category: e.target.value,
      };
    });
    setValue("category", e.target.value);
    setIsVisibleDropdown(false);
    const categoryExternalId = JSON.parse(e.target.dataset.category).externalId;
    setCategoryId(categoryExternalId);
  };

  const selectDonor = (e) => {
    const donorData = JSON.parse(e.target.dataset.donor);
    setDonorId(donorData?.externalId);
    setValue("description", donorData?.description, {
      shouldValidate: true,
    });
    setValue("address", donorData?.address, { shouldValidate: true });
    setValue("city", donorData?.city, { shouldValidate: true });
    setDate(donorData?.dateOfBirth.split("-").reverse().join("-"));
    setValue(
      "dateOfBirth",
      donorData?.dateOfBirth.split("-").reverse().join("-"),
      {
        shouldValidate: true,
      }
    );
    setValue("gender", donorData?.gender, { shouldValidate: true });
    setValue("name", donorData?.name, { shouldValidate: true });
    setValue("mobileNumber", donorData?.mobile, { shouldValidate: true });
    setValue("email", donorData?.email, { shouldValidate: true });
    setValue("panNumber", donorData?.panNumber, {
      shouldValidate: true,
    });
    setValue("pinCode", donorData?.pinCode, { shouldValidate: true });
    setValue("state", donorData?.state, { shouldValidate: true });
    setIsVisibleDropdown(false);
  };

  const getDonorsByName = async (name) => {
    setLoading(true);
    const result = await donorsController.searchDonorByName(name);
    const data = result?.data?.data;
    setDonorData(data);
    setLoading(false);
  };

  const handleChange = (input) => (e) => {
    if (input === "category") {
      setData((prevData) => {
        return {
          ...prevData,
          [input]: e.target.value,
        };
      });
      const searchWord = e.target.value;
      const newFilter = categoriesData?.filter((value) => {
        return value.name.toLowerCase().includes(searchWord.toLowerCase());
      });
      if (searchWord === "") {
        setIsVisibleDropdown(false);
        setFilteredData([]);
      } else {
        setFilteredData(newFilter);
        setIsVisibleDropdown(true);
      }
    } else if (input === "name") {
      const name = e.target.value;
      if (name === "") {
        setIsVisibleDropdown(false);
      }
      if (name.length >= 3) {
        setIsVisibleDropdown(true);
        getDonorsByName(name);
      }
    } else {
      setData((prevData) => {
        return {
          ...prevData,
          [input]: e.target.value,
        };
      });
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await ngoCategoryController.getCategories();
      setCategoriesData(response?.data);
    };
    getCategories();
  }, []);

  const onSubmit = (data) => {
    if (
      data.mobileNumber &&
      data.name &&
      data.address &&
      data.city &&
      data.pinCode &&
      data.state
    ) {
      if (page < 2) {
        nextStep();
      }
    }
  };

  const onSubmitStepTwo = (data) => {
    setData({
      amount: data.amount,
      category: data.category,
      description: data.description,
      address: data?.address,
      city: data?.city,
      state: data?.state,
      dateOfBirth: data?.dateOfBirth?.split("-").reverse().join("-"),
      dueFromMonth: data.dueFromMonth,
      dueFromYear: data.dueFromYear,
      email: data?.email,
      gender: data?.gender,
      mobileNumber: data.mobileNumber,
      name: data?.name,
      oneTimeDonor: data.oneTimeDonor,
      panNumber: data?.panNumber,
      pinCode: data?.pinCode,
      paymentMethod: data?.paymentMethod,
    });

    if (page > 1 && page < 3) {
      nextStep();
    }
  };

  const formattedData = {
    amount: data.amount,
    categoryId: categoryId ? categoryId : null,
    description: data.description,
    donorInfo: {
      donorId: donorId ? donorId : null,
      address: data.address,
      city: data.city,
      dateOfBirth: data.dateOfBirth,
      dueFromMonth: data.dueFromMonth,
      dueFromYear: data.dueFromYear,
      email: data.email,
      gender: data.gender,
      mobileNumber: data.mobileNumber,
      name: data.name,
      oneTimeDonor: data.oneTimeDonor,
      panNumber: data.panNumber,
      pinCode: data.pinCode,
      state: data.state,
    },
    paymentMethod: data.paymentMethod,
  };

  const createDonation = async () => {
    return receiptController.donation(data.category, formattedData);
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
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      onSubmitStepTwo={onSubmitStepTwo}
      date={date}
      categories={categoriesData}
      filteredData={filteredData}
      selectCategory={selectCategory}
      isVisibleDropdown={isVisibleDropdown}
      donorData={donorData}
      selectDonor={selectDonor}
    />
  );
}

export default MainCreateReciept;