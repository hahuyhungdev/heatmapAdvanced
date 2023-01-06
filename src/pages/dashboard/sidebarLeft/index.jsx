import '../style.scss';

import { UploadOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { ButtonCustom, ButtonGroup } from 'components';
import { TableVehicle } from 'components/Table';
import React from 'react';

const dataButtonGroup = [
  {
    value: 'off',
    label: 'Off',
  },
  {
    value: 'Line trace',
    label: 'Line trace',
  },
  {
    value: 'Heatmap',
    label: 'Heatmap',
  },
];
const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};
const SidebarLeft = () => {
  return (
    <div className="toolDasdboard">
      <div className="configuration">
        <div className="titleTool">MAP CONFIGURATION</div>
        <ButtonGroup defaultValue="off" options={dataButtonGroup} optionType="button" />
        <div className="gridView">
          <span>Grid view</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="anchorView">
          <span>Anchor View</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <ButtonCustom style={{ width: '100%' }} icon={<UploadOutlined />}>
          Click to Upload
        </ButtonCustom>
      </div>
      <div className="vehicleList">
        <div className="titleVehicle">VEHICLE LIST</div>
        <TableVehicle />
      </div>
    </div>
  );
};

export default SidebarLeft;
