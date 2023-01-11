import './style.scss';

import { DatePicker } from 'antd';
import { SelectOption } from 'components/Dropdown';
import { getDataSelector } from 'config/dataSlice';
// import RangePicker from 'components/RangePicker';
import moment from 'moment';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { ExcelExport } from './excelExport';
const { RangePicker } = DatePicker;

export const Report = () => {
  const usersData = useSelector(getDataSelector);
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
  console.log('usersData', usersData.data);
  const flatData = usersData.data
    .map((set) => {
      const date = moment.unix(set.date).format('DD MMMM YYYY');
      return set.logs.map((log) => {
        return {
          x: log.x,
          y: log.y,
          value: log.value,
          date: date,
        };
      });
    })
    .flat();
  console.log('flatData', flatData);
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
      <ExcelExport excelData={flatData} />
    </div>
  );
};

export default Report;
