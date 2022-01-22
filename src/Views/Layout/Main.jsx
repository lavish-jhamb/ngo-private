import React from "react";
import Header from "../Layout/Header/Index";

function MainLayout({ children,header }) {
  return (
    <div className="layout">
      <Header header={header} />
      {children}
    </div>
  );
}

export default MainLayout;
