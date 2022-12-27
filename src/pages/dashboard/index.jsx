import React from "react";
import "./style.scss";
import Background from "assets/images/background.png";
export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboardMap">
        <img
          src={Background}
          alt="map"
          style={{
            width: "100%",
            height: "90%",
          }}
        />
      </div>
      <div className="toolDasdboard">daskdjaskldjaskldjklqwe</div>
    </div>
  );
};

export default Dashboard;
