import React from "react";
import EditDonorDetails from "../Index";
import SecondaryLayout from "../../../../../Layout/Secondary/Main";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateDonor() {
  const navigate = useNavigate();

  const location = useLocation();

  const goBack = () => {
    if (location.pathname === "/update-donor") {
      navigate("/dashboard/donors");
    } else {
      navigate(-1);
    }
  };

  const { state } = useLocation();

  return (
    <div>
      <SecondaryLayout title="Update Donor" handler={goBack}>
        <EditDonorDetails
          data={state.donor}
          dueDate={state.dueDate}
          updateDonor={true}
        />
      </SecondaryLayout>
    </div>
  );
}

export default UpdateDonor;
