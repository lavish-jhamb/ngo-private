import React, { useState } from "react";
import ProfileOne from "./Step1/Index";
import ProfileTwo from "./Step2/Index";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ngoController } from "../../../../Api/Ngo/controller";
import { fileUploadController } from "../../../../Api/Ngo/utils";

function Steps() {
  const [logo, setLogo] = useState();
  const [logoName, setLogoName] = useState();
  const [pdfIcon, setPdfIcon] = useState(false);
  const [pdfName, setPdfName] = useState();
  const [page, setPage] = useState(1);
  const [logoData, setLogoData] = useState({
    fileName: "",
    fileType: "",
    ownerFileCategory: "",
  });

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const nextStep = () => {
    setPage(page + 1);
  };

  const prevStep = () => {
    setPage(page - 1);
  };

  const handleFile = () => (e) => {
    const file = e.target.files[0];
    fileUploadController('icon','jpg','Icon','df4c7ef8-5709-488d-8466-a502451a6e58',file);
    const fileType = file.type.split("/")[1];
    const fileName = file.name;
    const reader = new FileReader();
    reader.onload = (e) => {
      setLogo(e.target.result);
    };
    reader.readAsDataURL(file);
    setLogoName(fileName);
    setLogoData((prevData) => {
      return {
        ...prevData,
        fileName: fileName,
        fileType: fileType,
        ownerFileCategory: 'Icon',
      };
    });
  };

  const handlePdf = () => (e) => {
    const file = e.target.files[0];
    setPdfIcon(true);
    setPdfName(file.name);
  };

  const onSubmit = (data) => {
    if (data.ngoName && data.ownerName && data.panNo && data.registrationNo) {
      if(page < 2){
        nextStep();
      }
    }
  };

  const onSubmitStep2 = (data) => {
    ngoController.createNgo(navigate, data, logoData);
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
      handleFile={handleFile}
      handlePdf={handlePdf}
      logo={logo}
      logoName={logoName}
      pdfIcon={pdfIcon}
      pdfName={pdfName}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      onSubmitStep2={onSubmitStep2}
    />
  );
}

export default Steps;