import React, { useState } from "react";
import ProfileOne from "./Step1/Index";
import ProfileTwo from "./Step2/Index";

function Steps() {
  const [page, setPage] = useState(1);

  const steps = {
    1: ProfileOne,
    2: ProfileTwo,
  };

  const ProfileComponent = steps[page];

  return <ProfileComponent page={page} setPage={setPage} />
}

export default Steps;
