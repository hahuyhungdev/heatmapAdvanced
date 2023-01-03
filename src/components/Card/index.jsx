import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

export const Card = ({ valueIncrease, handleIncrease }) => {
  // console.log("Card");
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">Card Title</h3>
        <div className="card__actions">
          <button onClick={handleIncrease} className="card__action">
            Action 1
          </button>
        </div>
      </div>
      <div className="card__body">
        <p className="card__text">{valueIncrease}</p>
      </div>
    </div>
  );
};
Card.propTypes = {
  valueIncrease: PropTypes.number,
  handleIncrease: PropTypes.func,
};

export default memo(Card);
