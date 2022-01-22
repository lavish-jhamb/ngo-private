import React from "react";
import Headermain from "./Index";

function MainLayout1({ children,headermain }) {
  return (
    <div className="layout">
      <Headermain headermain={headermain} />
      {children}
    </div>
  );
}

export default MainLayout1;
