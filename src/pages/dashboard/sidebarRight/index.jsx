import '../style.scss';

import { UploadOutlined } from '@ant-design/icons';
import { DatePicker, Switch } from 'antd';
import { ButtonCustom, ButtonGroup, PopupMap } from 'components';
import { TableVehicle } from 'components/Table';
import { sidebarRightSelector, toggleLineTrace } from 'features/other/sidebarRightSlice';
import moment from 'moment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SidebarRight = () => {
  const [isModalMap, setIsModalMap] = useState(false);
  const [fromDate, setFromDate] = useState(null);
  const dispatch = useDispatch();
  const { isVisableLineTrace } = useSelector(sidebarRightSelector);
  console.log('statusSidebar', isVisableLineTrace);
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
      dispatch(toggleLineTrace(true));
    } else {
      dispatch(toggleLineTrace(false));
    }
  };

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  // onChange date picker
  const onChangePicker = (date, dateString, type) => {
    if (type === 'from') {
      console.log('date', date);
      setFromDate(date);
    }
  };
  const onOkPicker = (data, type) => {
    if (!data) return;
    if (type === 'from') {
      setFromDate(data);
    }
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
            <div className="selectDays">
              <DatePicker
                placeholder="From"
                showTime
                onChange={(date, dateString) => onChangePicker(date, dateString, 'from')}
                onOk={(data) => onOkPicker(data, 'from')}
                format="YYYY-MM-DD HH:mm"
                disabledDate={(current) => current && current > moment().endOf('day')}
              />
              <DatePicker
                placeholder="To"
                showTime
                onChange={(date, dateString) => onChangePicker(date, dateString, 'to')}
                onOk={(data) => onOkPicker(data, 'to')}
                format="YYYY-MM-DD HH:mm"
                disabledDate={(current) => {
                  return current && (current > moment().endOf('day') || current < fromDate);
                }}
              />
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

export default SidebarRight;
