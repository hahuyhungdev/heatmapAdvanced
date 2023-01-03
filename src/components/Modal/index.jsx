import { Button, Form, Input, Modal, Space } from 'antd';
import { ButtonCustom, SelectOption } from 'components';
import { PropTypes } from 'prop-types';
import { memo } from 'react';

import './style.scss';
export const ModalAlert = memo(({ className, title, open, onCancel, options }) => {
  const [form] = Form.useForm();
  const handleOke = (values) => {
    console.log('Success:', values);
  };
  return (
    <Modal
      title={title}
      open={open}
      className={('modalStyle', className)}
      onOk={form.submit}
      onCancel={onCancel}
      footer={[
        <div
          key="footerCutom"
          style={{
            display: 'flex',
            marginRight: '24px',
            justifyContent: 'flex-end',
            gap: '10px',
          }}
        >
          <Button key={'back'} style={{ marginTop: '10px' }} onClick={onCancel}>
            Cancel
          </Button>
          <ButtonCustom type="primary" style={{ marginTop: '10px' }} htmlType="submit" onClick={form.submit}>
            Save
          </ButtonCustom>
        </div>,
      ]}
    >
      <Form
        form={form}
        autoComplete="off"
        onFinish={handleOke}
        onFinishFailed={(error) => {
          console.log({ error });
        }}
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
            <SelectOption options={options} placeholder="Select Icon" />
          </Form.Item>
        </Space>
        <Form.Item
          label="Tag"
          name={'Tag'}
          // noStyle
          rules={[{ required: true, message: 'Tag is required' }]}
        >
          <SelectOption options={options} placeholder="Select Tag" />
        </Form.Item>
        <Form.Item name={'introduction'} label="Introduction">
          <Input.TextArea showCount maxLength={100} placeholder="disable resize" />
        </Form.Item>
      </Form>
    </Modal>
  );
});
ModalAlert.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  open: PropTypes.bool,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  options: PropTypes.array,
};

export default ModalAlert;
