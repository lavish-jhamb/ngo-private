import React from "react";
import SecondaryHeader from "./Index";

function MainLayout({ children, title, handler, editBtn, donor ,dueDate}) {
  return (
    <div className="layout">
      <SecondaryHeader
        title={title}
        handler={handler}
        editBtn={editBtn}
        donor={donor}
        dueDate={dueDate}
      />
      {children}
    </div>
  );
}

export default MainLayout;
