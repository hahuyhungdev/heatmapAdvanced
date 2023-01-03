import { Button, Space } from 'antd';
// import { ButtonCustom } from 'components';
import { ButtonCustom, Page, Popup } from 'components';
import { Pagination } from 'antd';
import React, { useState } from 'react';
import './style.scss';
export const Devices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showPopup = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="devices">
      <title>Devices</title>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        <span> bấm zô đây để bật popup</span>
        <ButtonCustom onClick={showPopup}>huyhung</ButtonCustom>
        <br />
        <Popup title="Create Object" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} />

        <Page total={500} current={6} />
        <br />
        <Pagination defaultCurrent={6} total={500} />
        <h1>Hello world!</h1>
        <Space wrap>
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
          <Button type="dashed" danger>
            Dashed
          </Button>
          <Button type="text" danger>
            Text
          </Button>
          <Button type="link" danger>
            Link
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Devices;
