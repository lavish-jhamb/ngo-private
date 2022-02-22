import React from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function ProfileOne(props) {
  const {
    handleFile,
    handlePdf,
    logo,
    logoName,
    pdfIcon,
    pdfName,
    register,
    handleSubmit,
    errors,
    onSubmit,
  } = props;

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SecondaryLayout title="NGO Profile" handler={goBack}>
      <div className={Style.ngoProfileWrapper}>
        <div className={Style.ngoProfileContainer}>
          <div className={Style.header}>
            <h2>NGO Details</h2>
            <p>Step 1 of 2</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Style.ngoFormContainer}>
              <div className={Style.ngoForm}>
                <div className={Style.uploadLogo}>
                  <label htmlFor="logo">
                    {logoName ? logoName : "NGO Logo"}
                    <img
                      src={logo ? logo : "/resources/images/upload.png"}
                      alt="icon"
                    />
                  </label>
                  <input onChange={handleFile()} id="logo" type="file" />
                </div>
                <div className={Style.uploadPdf}>
                  <label htmlFor="pdf">
                    {pdfName ? pdfName : "Reg. Certificate PDF"}{" "}
                    <img
                      src={
                        pdfIcon
                          ? "/resources/images/pdf.png"
                          : "/resources/images/upload.png"
                      }
                      alt="icon"
                    />
                  </label>
                  <input onChange={handlePdf("")} id="pdf" type="file" />
                </div>
                <div className={Style.inputField}>
                  <input
                    name="ngoName"
                    type="text"
                    placeholder="NGO Name"
                    autoComplete="off"
                    {...register("ngoName", {
                      required: {
                        value: true,
                        message: "Ngo name is required",
                      },
                    })}
                  />
                  {errors.ngoName && <p>{errors.ngoName.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    name="ownerName"
                    type="text"
                    placeholder="Owner Name"
                    autoComplete="off"
                    {...register("ownerName", {
                      required: {
                        value: true,
                        message: "Owner name is required",
                      },
                    })}
                  />
                  {errors.ownerName && <p>{errors.ownerName.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="text"
                    placeholder="PAN NO."
                    autoComplete="off"
                    {...register("panNo", {
                      required: { value: true, message: "PAN NO. is required" },
                    })}
                  />
                  {errors.panNo && <p>{errors.panNo.message}</p>}
                </div>
                <div className={Style.inputField}>
                  <input
                    type="number"
                    placeholder="Registration NO."
                    autoComplete="off"
                    {...register("registrationNo", {
                      required: {
                        value: true,
                        message: "Registration NO is required",
                      },
                    })}
                  />
                  {errors.registrationNo && (
                    <p>{errors.registrationNo.message}</p>
                  )}
                </div>
              </div>
              <div className={Style.nextButton}>
                <button type="submit">
                  Next
                  <span>
                    <img src="/resources/images/next.png" alt="icon" />
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileOne;
