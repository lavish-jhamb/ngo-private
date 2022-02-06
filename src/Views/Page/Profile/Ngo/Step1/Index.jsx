import React from "react";
import Style from "./Index.module.css";
import SecondaryLayout from "../../../../Layout/Secondary/Main";
import { useNavigate } from "react-router-dom";

function ProfileOne(props) {
  const {
    nextStep,
    handleChange,
    values,
    handleFile,
    handlePdf,
    logo,
    logoName,
    pdfIcon,
    pdfName,
  } = props;

  const navigate = useNavigate();

  const pageHandler = () => {
    nextStep();
  };

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
          <div className={Style.ngoFormContainer}>
            <form>
              <div className={Style.ngoForm}>
                <div className={Style.uploadLogo}>
                  <label htmlFor="logo">
                    {logoName ? logoName : "NGO Logo"}
                    <img src={logo ? logo : "/resources/images/upload.png"} alt="icon" />
                  </label>
                  <input onChange={handleFile()} id="logo" type="file" />
                </div>
                <div className={Style.uploadPdf}>
                  <label htmlFor="pdf">
                    {pdfName ? pdfName : "Reg. Certificate PDF"}{" "}
                    <img src={pdfIcon ? "/resources/images/pdf.png" : "/resources/images/upload.png"} alt="icon" />
                  </label>
                  <input onChange={handlePdf("")} id="pdf" type="file" />
                </div>
                <input
                  value={values.ngoName}
                  name="ngoName"
                  onChange={handleChange("ngoName")}
                  type="text"
                  placeholder="NGO Name"
                  autoComplete="off"
                />
                <input
                  value={values.ownerName}
                  name="ownerName"
                  onChange={handleChange("ownerName")}
                  type="text"
                  placeholder="Owner Name"
                  autoComplete="off"
                />
                <input
                  value={values.panNo}
                  onChange={handleChange("panNo")}
                  type="text"
                  placeholder="PAN NO."
                  autoComplete="off"
                />
                <input
                  value={values.registrationNo}
                  onChange={handleChange("registrationNo")}
                  type="text"
                  placeholder="Registration NO."
                  autoComplete="off"
                />
              </div>
              <div className={Style.nextButton}>
                <button onClick={pageHandler} type="submit">
                  Next
                  <span>
                    <img src="/resources/images/next.png" alt="icon" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SecondaryLayout>
  );
}

export default ProfileOne;
