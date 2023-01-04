import { Button } from 'antd';
import clsx from 'clsx';
import { PropTypes } from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import './style.scss';

export const ButtonCustom = ({ className, loading = false, children, disabled = false, ...restProps }) => {
  return (
    <div className="antCustom">
      <Button onClick={restProps.onClick} className={className} disabled={disabled || loading} {...restProps}>
        {loading ? (
          // <div className="flex items-center justify-center absolute w-full h-full top-0 left-0">
          <div className={clsx('buttonLoading')}>
            <div className="animate-spin">
              <AiOutlineLoading3Quarters size={20} />
            </div>
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
};

export default ButtonCustom;
