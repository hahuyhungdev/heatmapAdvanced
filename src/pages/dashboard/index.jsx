import './style.scss';

import Background from 'assets/images/background.png';
import React from 'react';

import SidebarLeft from './sidebarLeft';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardMap">
        <img src={Background} alt="map" />
      </div>
      <SidebarLeft />
    </div>
  );
};

export default Dashboard;
