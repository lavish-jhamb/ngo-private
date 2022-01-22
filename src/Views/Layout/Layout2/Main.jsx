import React from 'react';
import Header from '../Layout2/Layout2/Index';

function MainLayout({children,title}) {
    return (
      <div className="layout">
        <Header title={title} />
        {children}
      </div>
    );
}

export default MainLayout;