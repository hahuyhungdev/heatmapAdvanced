import clsx from 'clsx';
import { IconDashboard, IconDevices, IconReport, IconTag } from 'components/Icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './style.scss';

const dataNavigation = [
  {
    path: '/',
    name: 'Monitoring Dashboard',
    icon: <IconDashboard fill="#A85F0A" />,
  },
  {
    path: '/home',
    name: 'Ha Huy Hung',
    icon: <IconDashboard />,
  },
  {
    path: '/devices',
    name: 'Devices Management',
    icon: <IconDevices />,
  },
  {
    path: '/tags',
    name: 'Tags Management',
    icon: <IconTag />,
  },
  {
    path: '/report',
    // name: '3123123',
    name: 1312,
    icon: <IconReport />,
  },
];
// dataNavigation.propTypes = {
//   path: PropTypes.string,
//   name: PropTypes.string,
//   icon: PropTypes.element,
// };

export const Layout = () => {
  const location = useLocation();
  console.log('location', location.pathname);
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
              <div>{item.icon}</div>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
