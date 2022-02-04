import React, { useState } from "react";
import ProfileOne from "./Step1/Index";
import ProfileTwo from "./Step2/Index";
import { ngoController } from "../../../../Api/Ngo/controller";

function Steps() {
  const [logo, setLogo] = useState();
  const [logoName, setLogoName] = useState();
  const [pdfIcon, setPdfIcon] = useState(false);
  const [pdfName, setPdfName] = useState();
  const [page, setPage] = useState(1);
  const [data, setData] = useState({
    ngoLogo: { name: "", type: "" },
    pdf: "",
    ngoName: "",
    ownerName: "",
    panNo: "",
    registrationNo: "",
    phoneNo: "",
    website: "",
    address: "",
    city: "",
    pinCode: "",
    state: "",
  });

  const {
    ngoLogo,
    pdf,
    ngoName,
    ownerName,
    panNo,
    registrationNo,
    phone,
    website,
    address,
    city,
    pincode,
    state,
  } = data;

  const values = {
    ngoLogo,
    pdf,
    ngoName,
    ownerName,
    panNo,
    registrationNo,
    phone,
    website,
    address,
    city,
    pincode,
    state,
  };

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

  const handleFile = () => (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target.result);
    };
    reader.readAsDataURL(file);
    setLogoName(file.name);
    setData((prevData) => {
      return {
        ...prevData,
        ngoLogo: {
          name: file.name,
          type: file.type,
        },
      };
    });
  };

  const handlePdf = () => (e) => {
    const file = e.target.files[0];
    setPdfIcon(true);
    setPdfName(file.name);
    setData((prevData) => {
      return {
        ...prevData,
        pdf: file.name,
      };
    });
  };

  const ngoFormHandler = (navigate) => {
    ngoController.createNgo(navigate, data);
  };

  const ngoFileHandler = () => {
    const fileName = data.ngoLogo.name;
    const fileType = data.ngoLogo.type.split("/")[1];
    ngoController.fileUpload(fileName, fileType);
  };

  const steps = {
    1: ProfileOne,
    2: ProfileTwo,
  };

  const ProfileComponent = steps[page];

  return (
    <ProfileComponent
      nextStep={nextStep}
      prevStep={prevStep}
      handleChange={handleChange}
      values={values}
      handleFile={handleFile}
      handlePdf={handlePdf}
      logo={logo}
      logoName={logoName}
      pdfIcon={pdfIcon}
      pdfName={pdfName}
      ngoFormHandler={ngoFormHandler}
      ngoFileHandler={ngoFileHandler}
    />
  );
}

export default Steps;
