import React from 'react';
import TertiaryHeader from './Index';

function MainLayout({children}) {
    return (
        <div className="layout">
            <TertiaryHeader/>
            {children}
        </div>
    );
}

export default MainLayout;