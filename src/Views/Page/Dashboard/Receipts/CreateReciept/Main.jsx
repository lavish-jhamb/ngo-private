import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import StepOne from "./Step1/Index";
import StepTwo from "./Step2/Index";
import StepThree from "./Step3/Index";
import { receiptController } from "../../../../../Api/Receipt/controller";
import { getCookie } from "../../../../../Utils/cookie";
import { ngoCategoryController } from "../../../../../Api/NgoCategory/controller";

function MainCreateReciept() {
  const [page, setPage] = useState(1);
  const [isVisibleDropdown, setIsVisibleDropdown] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
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
    setIsVisibleDropdown(false);
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
    const fetchDonorInfo = async () => {
      setLoading(true);
      const id = getCookie("ngoExternalId");
      const response = await receiptController.searchDonorByMobile(
        id,
        data.mobileNumber
      );
      if (response.status === 200) {
        setValue("description", response?.data?.description, {
          shouldValidate: true,
        });
        setValue("address", response?.data?.address, { shouldValidate: true });
        setValue("city", response?.data?.city, { shouldValidate: true });
        setDate(response?.data?.dateOfBirth.split("-").reverse().join("-"));
        setValue(
          "dateOfBirth",
          response?.data?.dateOfBirth.split("-").reverse().join("-"),
          {
            shouldValidate: true,
          }
        );
        setValue("gender", response?.data?.gender, { shouldValidate: true });
        setValue("name", response?.data?.name, { shouldValidate: true });
        setValue("email", response?.data?.email, { shouldValidate: true });
        setValue("panNumber", response?.data?.panNumber, {
          shouldValidate: true,
        });
        setValue("pinCode", response?.data?.pinCode, { shouldValidate: true });
        setValue("state", response?.data?.state, { shouldValidate: true });
      }
      setLoading(false);
    };
    if (parseInt(data?.mobileNumber?.length) === 10) {
      fetchDonorInfo();
    }
  }, [data.mobileNumber, setValue]);

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
      data.email &&
      data.dateOfBirth &&
      data.panNumber &&
      data.gender
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
      dateOfBirth: data?.dateOfBirth,
      email: data?.email,
      gender: data?.gender,
      mobileNumber: data.mobileNumber,
      name: data?.name,
      panNumber: data?.panNumber,
      pinCode: data?.pinCode,
      paymentMethod: data?.paymentMethod,
    });

    if (page > 1 && page < 3) {
      nextStep();
    }
  };

  const formattedData = () => {
    const getDonorId = getCookie("getdonorId");
    const categoryId = getCookie("categoryId");
    const formattedData = {
      amount: data.amount,
      categoryId: categoryId && categoryId,
      description: data.description,
      donorInfo: {
        donorId: getDonorId && getDonorId,
        address: data.address,
        city: data.city,
        dateOfBirth: data.dateOfBirth,
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
    return receiptController.donation(data.category, formattedData());
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
    />
  );
}

export default MainCreateReciept;