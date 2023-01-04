import { Form, Input, Modal, Space } from 'antd';
import { FooterModal, SelectOption } from 'components';
import { PropTypes } from 'prop-types';
import { memo } from 'react';

import './style.scss';
export const PopupCRUD = memo(({ title, options, onCancel, onOpen, onFinish }) => {
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
        footer={[<FooterModal key="footerCutom" onCancel={onCancel} onFinish={onFinish} />]}
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

PopupCRUD.propTypes = {
  title: PropTypes.string,
  onOpen: PropTypes.bool,
  onFinish: PropTypes.func,
  onCancel: PropTypes.func,
  options: PropTypes.array,
};

export default PopupCRUD;
