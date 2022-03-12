import React from "react";
import EditDonorDetails from "../Index";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateDonor() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const { state } = useLocation();

  return (
    <div>
      <SecondaryLayout title="Update Donor" handler={goBack}>
        <EditDonorDetails data={state} updateDonor={true} />
      </SecondaryLayout>
    </div>
  );
}

export default UpdateDonor;
