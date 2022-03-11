import React from 'react';
import SecondaryHeader from './Index';

function MainLayout({ children, title, handler, editBtn,data }) {
  return (
    <div className="layout">
      <SecondaryHeader title={title} handler={handler} editBtn={editBtn} data={data} />
      {children}
    </div>
  );
}

export default MainLayout;