import React from "react";
import Header from "../Layout/Header/Index";

function MainLayout({ children }) {
  return (
    <div className="layout">
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
