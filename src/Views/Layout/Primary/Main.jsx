import React from "react";
import PrimaryHeader from "./Index";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <PrimaryHeader />
      {children}
    </div>
  );
}

export default MainLayout;
