import './style.scss';

import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

export const ButtonCustom = ({ className, icon, loading = false, children, disabled = false, ...restProps }) => {
  return (
    <div className="antCustom">
      <Button onClick={restProps.onClick} className={className} disabled={disabled || loading} {...restProps}>
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
  children: PropTypes.node,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
};

export default ButtonCustom;
