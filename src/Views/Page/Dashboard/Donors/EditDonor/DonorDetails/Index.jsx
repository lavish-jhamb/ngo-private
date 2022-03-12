import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import EditDonorDetails from "../Index";

function DonorDetails() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
    };

    const { state } = useLocation();
    console.log(state);

  return (
    <div>
      <SecondaryLayout title="Donor" editBtn={true} handler={goBack}>
        <EditDonorDetails data={state} isDisabled={true} />
      </SecondaryLayout>
    </div>
  );
}

export default DonorDetails;
