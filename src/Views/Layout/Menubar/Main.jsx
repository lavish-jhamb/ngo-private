import React from 'react';
import TertiaryHeader from '../Tertiary/Index';
import MenuBar from "./Index";

function MainLayout({children}) {
    return (
        <div className="layout">
            <TertiaryHeader/>
            {children}
            <MenuBar/>
        </div>
    );
}

export default MainLayout;