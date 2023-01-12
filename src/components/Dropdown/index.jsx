import { Select } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const { Option } = Select;

export const SelectOption = ({
  className = '',
  onChange = () => {},
  value = 0,
  options = [],
  placeholder = '',
  disabled = false,
  isIcon = false,
  ...props
}) => {
  return (
    <Select
      // @ts-ignore
      defaultValue="lucy"
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    >
      {options?.map(({ value, label, Icon }, index) => (
        <Option key={value || index} value={value}>
          {isIcon ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <span>{Icon}</span>
              <span>{label}</span>
            </div>
          ) : (
            label
          )}
        </Option>
      ))}
    </Select>
  );
};
SelectOption.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string || PropTypes.number,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  key: PropTypes.string,
  disabled: PropTypes.bool,
  isIcon: PropTypes.bool,
  Icon: PropTypes.string || PropTypes.element,
  defaultValue: PropTypes.any,
};
