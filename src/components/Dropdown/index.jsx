import { Select } from 'antd';
import PropTypes  from 'prop-types';

const { Option } = Select;

export const SelectOption = ({
  className,
  onChange,
  value,
  options,
  placeholder,
  disabled,
  isIcon,

  ...props
}) => {
  return (
    <Select
      className={className}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      {...props}
    >
      {options?.map(({ value, label, url_Image }) => (
        <Option key={value} value={value}>
          {isIcon ? (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
              <span>{url_Image}</span>
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
  url_Image: PropTypes.string || PropTypes.element,
};
