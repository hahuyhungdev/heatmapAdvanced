import { Button, Form, Input, Modal, Space } from 'antd';
import { ButtonCustom, SelectOption } from 'components';
import { PropTypes } from 'prop-types';
import { memo } from 'react';

import './style.scss';
export const Popup = memo(({ title, options, onCancel, onOpen }) => {
  const [form] = Form.useForm();
  const handleOke = (values) => {
    console.log('Success:', values);
  };
  return (
    <div className="antCustom">
      <Modal
        title={title}
        open={onOpen}
        className={'modalStyle'}
        onOk={form.submit}
        onCancel={onCancel}
        footer={[
          <div key="footerCutom" className="containFooter">
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
});

Popup.propTypes = {
  title: PropTypes.string,
  onOpen: PropTypes.bool,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  options: PropTypes.array,
};

export default Popup;
