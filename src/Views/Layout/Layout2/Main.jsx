import React from 'react';
import Header from '../Layout2/Layout2/Index';

function MainLayout({children,title,handler}) {
    return (
      <div className="layout">
        <Header title={title} handler={handler} />
        {children}
      </div>
    );
}

export default MainLayout;