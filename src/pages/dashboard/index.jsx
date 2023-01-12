import './style.scss';

// eslint-disable-next-line no-unused-vars
import Background from 'assets/images/background.png';
import React from 'react';

import SidebarRight from './sidebarRight';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardMap">
        <img src={Background} alt="map" />
      </div>
      <SidebarRight />
    </div>
  );
};

export default Dashboard;
