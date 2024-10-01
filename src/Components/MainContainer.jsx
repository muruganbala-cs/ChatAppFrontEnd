import React from 'react';
import './mainstyle.css'
import Sidebar from './Sidebar';
import Workarea from './Workarea';

const MainContainer = () => {
    return (
        <div className='maincontainer'>
        <Sidebar />
        <Workarea/>
        </div>
    );
};

export default MainContainer;