import moment from 'moment';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
// import usersData from "../../data/fake.js";
export const ShowData = ({ usersData }) => {
  // console.log("usersData");
  // const usernameList = usersData.map((item) => item.username.map((point) => point.value));
  return (
    <div className="listUsers">
      {usersData.map((user, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: '10px',
            }}
          >
            <span>{JSON.stringify(user.username)}</span>
            <span>{moment.unix(user.date).format('YYYY - MM - DD HH:mm')}</span>
          </div>
        );
      })}
    </div>
  );
};
ShowData.propTypes = {
  usersData: PropTypes.array,
};
export default memo(ShowData);
