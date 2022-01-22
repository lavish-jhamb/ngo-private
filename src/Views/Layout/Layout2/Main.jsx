import React from 'react';
import Header from '../Layout2/Layout2/Index';

function MainLayout({children}) {
    return (
      <div className="layout">
        <Header />
        {children}
      </div>
    );
}

export default MainLayout;