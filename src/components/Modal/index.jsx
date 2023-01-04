// import { memo } from 'react';
import { Modal } from 'antd';
import { IconWarning } from 'components';
import { PropTypes } from 'prop-types';
import { FooterModal } from 'components';
import './style.scss';

export const ModalAlert = ({ title, content, onFinish, onOpen, onCancel }) => {
  return (
    <div className="antCustom">
      <Modal
        open={onOpen}
        onOk={onFinish}
        onCancel={onCancel}
        footer={[<FooterModal key="footerCutom" onCancel={onCancel} onFinish={onFinish} />]}
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
