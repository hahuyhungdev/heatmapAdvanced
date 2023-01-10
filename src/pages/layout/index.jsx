import './style.scss';

import clsx from 'clsx';
import { IconDashboard, IconDevices, IconReport, IconTag } from 'components/Icons';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const dataNavigation = [
  {
    path: '/',
    name: 'Monitoring Dashboard',
    icon: (color) => <IconDashboard fill={color} />,
  },
  {
    path: '/devices',
    name: 'Devices Management',
    icon: (color) => <IconDevices fill={color} />,
  },
  {
    path: '/tags',
    name: 'Tags Management',
    icon: (color) => <IconTag fill={color} />,
  },
  {
    path: '/report',
    name: 'Report',
    icon: (color) => <IconReport fill={color} />,
  },
  {
    path: '/example',
    name: 'Example',
    icon: (color) => <IconDevices fill={color} />,
  },
  {
    path: '/home',
    name: 'Ha Huy Hung',
    icon: (color) => <IconDashboard fill={color} />,
  },
];

export const Layout = () => {
  const location = useLocation();
  return (
    <div className="mainHome">
      <header className="header">
        <title>Monitoring Dashboard</title>
        <h1 className="rtls ">RTLS SYSTEM</h1>
      </header>
      <div className="layout">
        <div className="sideBar">
          {dataNavigation.map((item) => (
            <Link className={clsx('item', { active: item.path === location.pathname })} to={item.path} key={item.path}>
              <div>{item.icon(item.path === location.pathname ? '#A85F0A' : null)}</div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
