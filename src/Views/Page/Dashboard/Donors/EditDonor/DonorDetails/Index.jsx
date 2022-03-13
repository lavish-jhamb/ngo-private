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

  return (
    <div>
      <SecondaryLayout
        title="Donor"
        editBtn={true}
        handler={goBack}
        donor={state.donor}
        dueDate={state.dueDate}
      >
        <EditDonorDetails
          data={state.donor}
          dueDate={state.dueDate}
          isDisabled={true}
        />
      </SecondaryLayout>
    </div>
  );
}

export default DonorDetails;
