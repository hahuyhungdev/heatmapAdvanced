// import { memo } from 'react';
import { Modal } from 'antd';
import { ButtonCustom, IconWarning } from 'components';
import { PropTypes } from 'prop-types';
import './style.scss';

export const ModalAlert = ({ title, content, onFinish, onOpen, onCancel }) => {
  return (
    <div className="antCustom">
      <Modal
        open={onOpen}
        onOk={onFinish}
        onCancel={onCancel}
        footer={[
          <div key="footerCutom" className="containFooter">
            <button
              key={'back'}
              style={{ marginTop: '10px', border: 'none', background: 'initial', color: '#A85F0A', cursor: 'pointer' }}
              onClick={onCancel}
            >
              Cancel
            </button>
            <ButtonCustom type="primary" style={{ marginTop: '10px' }} htmlType="submit" onClick={onFinish}>
              Save
            </ButtonCustom>
          </div>,
        ]}
      >
        <div className="warningConfirm">
          <IconWarning />
          <div className="containText">
            <span className="titletModal">{title}</span>
            <span className="contentModal">{content}</span>
          </div>
        </div>
      </Modal>
    </div>
  );
};
ModalAlert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  onOpen: PropTypes.bool,
};
