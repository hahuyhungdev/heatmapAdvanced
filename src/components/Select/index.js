import { Select } from 'antd';
import moment from 'moment';
// import { useState } from 'react';
import { PropTypes } from 'prop-types';
import React, { memo } from 'react';

export const SelectOptionsHeatpmap = ({ valuesSelect }) => {
  // const valuesSelect = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // console.log("startDate", moment().diff(moment().subtract(6, "h"), "h"));
  // options are today, yesterday, this week, this month
  const options = [
    { label: 'Today', value: moment().diff(moment().subtract(6, 'h'), 'h') },
    {
      label: 'Yesterday',
      value: moment().diff(moment().subtract(1, 'days'), 'h'),
    },
    {
      label: 'This Week',
      value: moment().diff(moment().subtract(1, 'weeks'), 'h'),
    },
    {
      label: 'This Month',
      value: moment().diff(moment().subtract(1, 'months'), 'h'),
    },
  ];

  return (
    <Select
      defaultValue={moment().diff(moment().subtract(6, 'h'), 'h')}
      style={{ width: 120 }}
      onChange={valuesSelect}
      options={options}
    />
  );
};
SelectOptionsHeatpmap.propTypes = {
  valuesSelect: PropTypes.func,
};
export default memo(SelectOptionsHeatpmap);
