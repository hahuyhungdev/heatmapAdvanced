import './style.scss';

import { Button } from 'antd';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import PropTypes from 'prop-types';
import React from 'react';

export const ButtonCustom = ({
  className = '',
  onClick = () => {},
  icon = null,
  loading = false,
  children,
  disabled = false,
  ...restProps
}) => {
  return (
    <div className="antCustom">
      <Button onClick={onClick} className={className} disabled={disabled || loading} {...restProps}>
        {icon ? (
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
            <span> {icon}</span>
            {children}
          </div>
        ) : (
          <div>{children}</div>
        )}
      </Button>
    </div>
  );
};
ButtonCustom.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
  fullWidth: PropTypes.bool,
  size: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.element || PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  onClick: PropTypes.any,
  style: PropTypes.object,
};

export default ButtonCustom;
