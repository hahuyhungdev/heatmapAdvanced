/* eslint-disable no-unused-vars */
// import { memo } from 'react';
import './style.scss';

import { UploadOutlined } from '@ant-design/icons';
import { Button, Modal, Upload } from 'antd';
import { message } from 'antd';
import { ButtonCustom, FooterModal } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { useState } from 'react';

export const PopupMap = ({ onFinish, onOpen, onCancel }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 1000);
  };
  const onChange = (info) => {
    switch (info.file.status) {
      case 'uploading':
        setSelectedFile(info.file);
        break;
      case 'done':
        setSelectedFile(info.file);
        message.success('Upload successfully');
        console.log(info.file);
        break;

      default:
        // error or removed
        setSelectedFile(null);
        message.error('Upload failed');
        console.log(info.file);
        break;
    }
  };
  return (
    <div className="antCustom">
      <Modal
        title="Upload Map"
        open={onOpen}
        onOk={onFinish}
        centered
        onCancel={onCancel}
        footer={[<FooterModal key="footerCutom" onCancel={onCancel} onFinish={onFinish} />]}
      >
        <div className="warningConfirm">
          <Upload onChange={onChange}>
            <ButtonCustom style={{ width: '100%' }} icon={<UploadOutlined />}>
              Click to Upload
            </ButtonCustom>
          </Upload>
          {/* <br />
          <h3>Current State Log</h3>
          <pre>{JSON.stringify({ selectedFile, selectedFileList }, null, 2)}</pre> */}
        </div>
      </Modal>
    </div>
  );
};
PopupMap.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  onOpen: PropTypes.bool,
};
