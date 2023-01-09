import './style.scss';

import { Input } from 'antd';
import { ButtonCustom } from 'components/Button';
import DevicesTable from 'components/Table/Devices';
import React from 'react';
export const Devices = () => {
  return (
    <div className="mainDevices">
      <header>
        <title>Objects List</title>
        <div className="toolbar">
          <Input placeholder="Search" />
          <ButtonCustom>Add Object</ButtonCustom>
        </div>
      </header>
      <DevicesTable />
    </div>
  );
};

export default Devices;
