import { Button, Space } from 'antd';
import { ButtonCustom } from 'components';

import './style.scss';
export const Devices = () => {
  return (
    <div className="devices">
      <title>Devices</title>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        <ButtonCustom>huyhung</ButtonCustom>
        <ButtonCustom loading>huyhung</ButtonCustom>
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
