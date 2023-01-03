import { Input, Modal, Select } from 'antd';
import { PropTypes } from 'prop-types';

import './style.scss';
const { Option } = Select;
export const Popup = ({ className, title, open, onOk, onCancel }) => {
  return (
    <Modal title={title} open={open} onOk={onOk} onCancel={onCancel} className={('modalStyle', className)}>
      <div className="info">
        <div className="nameDevice">
          <span>Name device</span>
          <Input
            style={{
              width: '223px',
            }}
            defaultValue="input content"
          />
        </div>
        <div className="Icon">
          <span>Name device</span>
          <Select defaultValue="Option1">
            <Option value="Option1">Option1</Option>
            <Option value="Option2">Option2</Option>
          </Select>
        </div>
      </div>
    </Modal>
  );
};
Popup.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
};

export default Popup;
