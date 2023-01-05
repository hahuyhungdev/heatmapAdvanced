/* eslint-disable no-unused-vars */
import { Card, RangePicker, SelectOptionsHeatpmap, ShowData, TimeAgo } from 'components';
// import usersData from "data/userData.json";
import { getDataSelector } from 'config/dataSlice';
import moment from 'moment';
import React, { useCallback } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { HeatMap } from '..';

export function Home() {
  const [valueIncrease, setValueIncrease] = useState(0);
  const [dates, setDates] = useState(['', '']);
  const [date, setDate] = useState('');
  const [lastTime, setlastTime] = useState(6);
  const [data, setData] = useState('');

  const usersData = useSelector(getDataSelector);
  // console.log("dataStore", usersData);

  const handleChange = (data) => {
    // convert dataString to convert date to timestamp
    console.log('dataForm', data);
    const convertDate = data.RangeDate.map((item) => {
      console.log('itemRangedDate', moment(item).unix());
      return moment(item.$d).unix();
    });
    console.log('convertDate', convertDate);
    setDates(convertDate);
    setDate(data);
  };
  const valuesSelect = useCallback((value) => {
    console.log(`selected ${value}`);
    setlastTime(value);
  }, []);
  // handle time ago
  const handleTimeAgo = useCallback(() => {
    const timeAgo = moment().subtract(lastTime, 'hours').unix();
    console.log('timeAgo', lastTime, timeAgo);
    return timeAgo;
  }, [lastTime]);

  // filter data by date range with timestamp
  // console.log("dates", dates);
  const filterData = usersData.data.filter((item) => {
    return (item.date >= dates[0] && item.date <= dates[1]) || item.date >= handleTimeAgo();
  });
  // console.log("filterData", filterData);
  const handleIncrease = useCallback(() => {
    setValueIncrease((prev) => prev + 1);
  }, []);

  return (
    <div className="mainHomeTest">
      <h2>Start editing to see some magic happen!</h2>
      <SelectOptionsHeatpmap valuesSelect={valuesSelect} />
      <TimeAgo />
      {/* <RangePicker handleChange={handleChange} dates={dates} /> */}

      <ShowData usersData={filterData} />
      <HeatMap usersData={filterData} />
      {/* <Card valueIncrease={valueIncrease} handleIncrease={handleIncrease} /> */}
    </div>
  );
}
export default Home;
