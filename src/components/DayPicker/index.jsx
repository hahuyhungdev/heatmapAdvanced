import { DatePicker } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import React, { memo } from 'react';

const DayPicker = memo(({ handleChange, date }) => {
  return (
    <>
      <DatePicker
        onChange={handleChange}
        format="YYYY-MM-DD"
        placeholder={['Start Date', 'End Date']}
        disabledDate={(current) => current && current > moment().endOf('day')}
      />
      <p
        style={{
          color: 'yellow',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '10px',
        }}
      >
        {date}
      </p>
    </>
  );
});

DayPicker.propTypes = {
  handleChange: PropTypes.func,
  date: PropTypes.string,
};
export default DayPicker;
