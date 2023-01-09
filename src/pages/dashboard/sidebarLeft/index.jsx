import '../style.scss';

import { UploadOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import { ButtonCustom, ButtonGroup, PopupMap } from 'components';
import { TableVehicle } from 'components/Table';
import React, { useState } from 'react';

const SidebarLeft = () => {
  const [isVisableLineTrace, setIsVisableLineTrace] = useState(false);
  const [isModalMap, setIsModalMap] = useState(false);
  const dataButtonGroup = [
    {
      value: 'off',
      label: 'Off',
    },
    {
      value: 'linetrace',
      label: 'Line trace',
    },
    {
      value: 'heatmap',
      label: 'Heatmap',
    },
  ];
  // handle switch button group
  const onChangeButtonGroup = (e) => {
    console.log('radio checked', e.target.value);
    if (e.target.value === 'linetrace') {
      setIsVisableLineTrace(true);
    } else {
      setIsVisableLineTrace(false);
    }
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="toolDasdboard">
      <div className="configuration">
        <div className="titleTool">MAP CONFIGURATION</div>
        <ButtonGroup defaultValue="off" options={dataButtonGroup} onChange={onChangeButtonGroup} optionType="button" />
        {isVisableLineTrace && (
          <div className="lineTrace">
            <div className="historical">
              <span>Historical Data</span>
              <Switch defaultChecked onChange={onChange} />
            </div>
          </div>
        )}
        <div className="gridView">
          <span>Grid view</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className="anchorView">
          <span>Anchor View</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <ButtonCustom
          onClick={() => {
            setIsModalMap(true);
          }}
          style={{ width: '100%' }}
          icon={<UploadOutlined />}
        >
          Click to Upload
        </ButtonCustom>
        {isModalMap && (
          <PopupMap
            title="Upload Map"
            onCancel={() => {
              setIsModalMap(false);
            }}
            onOpen={isModalMap}
          />
        )}
      </div>
      <div className="vehicleList">
        <div className="titleVehicle">VEHICLE LIST</div>
        <TableVehicle />
      </div>
    </div>
  );
};

export default SidebarLeft;
