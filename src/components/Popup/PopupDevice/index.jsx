import './style.scss';

import { Form, Input, Modal, Space } from 'antd';
import { FooterModal, SelectOption } from 'components';
import PropTypes from 'prop-types';
import { memo } from 'react';
import React from 'react';
import { toast } from 'react-toastify';

export const PopupDevice = ({ title, options, onCancel, onOpen }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('Success:', values);
    toast.success('Success');
  };
  return (
    <div className="antCustom">
      <Modal
        title={title}
        open={onOpen}
        centered
        className={'modalStyle'}
        onOk={form.submit}
        onCancel={onCancel}
        footer={[<FooterModal key="footerCutom" onCancel={onCancel} onFinish={form.submit} />]}
      >
        <Form
          form={form}
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={(error) => {
            console.log(error);
            toast.error(error.errorFields[0].errors[0]);
          }}
          colon={false}
        >
          <Space>
            <Form.Item
              hasFeedback
              label="Name device"
              name={'name'}
              rules={[{ required: true, message: 'Name is required' }]}
            >
              <Input style={{ width: 230 }} placeholder="Please input" />
            </Form.Item>
            <Form.Item label="Icon" name={'icon'} rules={[{ required: true, message: 'Icon is required' }]}>
              <SelectOption isIcon options={options} placeholder="Select Icon" />
            </Form.Item>
          </Space>
          <Form.Item label="Tag" name={'Tag'} rules={[{ required: true, message: 'Tag is required' }]}>
            <SelectOption options={options} placeholder="Select Tag" />
          </Form.Item>
          <Form.Item name={'introduction'} label="Introduction">
            <Input.TextArea showCount maxLength={100} placeholder="disable resize" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

PopupDevice.propTypes = {
  title: PropTypes.string,
  onOpen: PropTypes.bool,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  options: PropTypes.array,
};

export default memo(PopupDevice);
