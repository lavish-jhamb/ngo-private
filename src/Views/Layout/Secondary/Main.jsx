import React from 'react';
import SecondaryHeader from './Index';

function MainLayout({children,title,handler}) {
    return (
      <div className="layout">
        <SecondaryHeader title={title} handler={handler} />
        {children}
      </div>
    );
}

export default MainLayout;