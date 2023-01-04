import { ExclamationCircleFilled } from '@ant-design/icons';
// import { memo } from 'react';
// import { PropTypes } from 'prop-types';
import { Modal } from 'antd';
import './style.scss';
const { confirm } = Modal;
export const ModalAlert = ({ title, content }) => {
  confirm({
    title: title,
    icon: <ExclamationCircleFilled />,
    content: content,
    onOk() {
      console.log('OK');
    },
    onCancel() {
      console.log('cancel');
    },
  });
};
// ModalAlert.propTypes = {
//   title: PropTypes.string,
//   content: PropTypes.string,
// };
