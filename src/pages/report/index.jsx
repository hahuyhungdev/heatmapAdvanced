/* eslint-disable no-unused-vars */
import './style.scss';

import { DatePicker } from 'antd';
import { ButtonCustom } from 'components/Button';
import { SelectOption } from 'components/Dropdown';
import { IconDashboard, IconDownload } from 'components/Icons';
// import RangePicker from 'components/RangePicker';
import moment from 'moment';
import React, { useState } from 'react';
const { RangePicker } = DatePicker;
export const Report = () => {
  const [dates, setDates] = useState([null, null]);
  const onOk = (data) => {
    if (!data) return;
    console.log('data', data);
    const [start, end] = data;
    const startTimestamp = moment(start).unix();
    const endTimestamp = moment(end).unix();
    setDates([startTimestamp, endTimestamp]);
  };
  console.log('dates', dates);
  return (
    <div className="mainReport">
      <div className="datetime">
        <div className="span">Date time</div>
        <RangePicker
          showTime={{ format: 'HH:mm' }}
          format="YYYY-MM-DD HH:mm"
          disabledDate={(current) => current && current > moment().endOf('day')}
          onOk={onOk}
        />
      </div>
      <div className="Devices">
        <div className="span">Devices</div>
        <SelectOption />
      </div>
      <ButtonCustom isIcon icon={<IconDownload />}>
        Get file
      </ButtonCustom>
    </div>
  );
};

export default Report;
