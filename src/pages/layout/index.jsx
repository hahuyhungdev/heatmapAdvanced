import { Link, Outlet } from "react-router-dom";
import { IconDashboard, IconReport, IconTag, IconDevices } from "components/Icons";

import "./style.scss";
const dataNavigation = [
  {
    path: "/",
    name: "Monitoring Dashboard",
    icon: <IconDashboard fill="#A85F0A" />,
  },
  {
    path: "/home",
    name: "Ha Huy Hung",
    icon: <IconDashboard />,
  },
  {
    path: "/devices",
    name: "Devices Management",
    icon: <IconDevices />,
  },
  {
    path: "/tags",
    name: "Tags Management",
    icon: <IconTag />,
  },
  {
    path: "/report",
    name: "Report",
    icon: <IconReport />,
  },
];
export const Layout = () => {
  return (
    <div className="mainHome">
      <header className="header">
        <title>Monitoring Dashboard</title>
        <h1 className="user">RTLS SYSTEM</h1>
      </header>
      <div className="layout">
        <div className="sideBar">
          {/* <div className="navigation"> */}
          {dataNavigation.map((item) => (
            <Link className="item" to={item.path} key={item.path}>
              <div>{item.icon}</div>
              <div>{item.name}</div>
            </Link>
          ))}
          {/* </div> */}
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
