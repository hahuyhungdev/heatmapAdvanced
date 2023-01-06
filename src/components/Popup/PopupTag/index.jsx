/* eslint-disable no-unused-vars */
import './style.scss';

import { Form, Input, Modal } from 'antd';
import { FooterModal } from 'components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

export const PopupTag = ({ title, onOpen, onFinish, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <div className="antCustom">
      <Modal
        title={title}
        open={onOpen}
        centered
        className={'modalStyle'}
        onCancel={onCancel}
        footer={[<FooterModal key="footerCutom" onCancel={onCancel} onFinish={form.submit} />]}
      >
        <Form
          form={form}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={(error) => {
            toast.error(error.errorFields[0].errors[0]);
          }}
          colon={false}
        >
          <Form.Item label="Name Tag" name={'nameTag'} rules={[{ required: true, message: 'Tag is required' }]}>
            <Input placeholder="Tag" />
          </Form.Item>
          <Form.Item name={'description'} label="description">
            <Input.TextArea showCount maxLength={100} placeholder="disable resize" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

PopupTag.propTypes = {
  title: PropTypes.string,
  onOpen: PropTypes.bool,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
};

export default memo(PopupTag);
