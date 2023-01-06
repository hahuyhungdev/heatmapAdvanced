import './style.scss';

import { Radio } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export const ButtonGroup = ({
  className = '',
  onChange = () => {},
  options = [],
  disabled = false,
  defaultValue = '',
  optionType = 'default',
  size = 'middle',
  buttonStyle = 'solid',
  ...restProps
}) => {
  return (
    <div className="buttonGroupCustom">
      <Radio.Group
        className={className}
        onChange={onChange}
        defaultValue={defaultValue}
        // @ts-ignore
        optionType={optionType}
        // @ts-ignore
        size={size}
        // @ts-ignore
        buttonStyle={buttonStyle}
        {...restProps}
      >
        {options.map((item, index) => {
          return (
            <Radio.Button key={index} value={item.value} disabled={disabled}>
              {item.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};
ButtonGroup.propTypes = {
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  optionType: PropTypes.string,
  size: PropTypes.oneOf(['large', 'default', 'small']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  buttonStyle: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
};
