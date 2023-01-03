import { Button, Space } from 'antd';
import { Pagination } from 'antd';
import { ButtonCustom, Page, Popup } from 'components';
import { useState } from 'react';
import { IconPerson, IconForklift, IconGroup } from 'components/Icons';
import './style.scss';
export const Devices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  console.log(isModalVisible);
  const showPopup = () => {
    console.log('showPopup');
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    console.log('Cancel');
    setIsModalVisible(false);
  };
  const dataOptions = [
    {
      value: 'hahuyhung',
      label: 'Forklift   ',
      url_Image: <IconForklift />,
    },
    {
      value: 'hahuyhung1',
      label: 'Person',
      url_Image: <IconPerson />,
    },
    {
      value: 'IconGroup',
      label: 'IconGroup',
      url_Image: <IconGroup />,
    },
  ];
  return (
    <div className="devices">
      <title>Devices</title>
      <div
        style={{
          textAlign: 'center',
          marginTop: '10px',
        }}
      >
        <span> bấm zô đây để create popup</span>
        <ButtonCustom onClick={showPopup}>huyhung</ButtonCustom>
        <Popup options={dataOptions} title="Create Object" open={isModalVisible} onCancel={handleCancel} />
        <br />
        <span> bấm zô đây để edit popup</span>
        <ButtonCustom
          style={{
            backgroundColor: '#e66363',
          }}
          onClick={showPopup}
        >
          edit
        </ButtonCustom>
        <Popup options={dataOptions} title="Edit Object" open={isModalVisible} onCancel={handleCancel} />
        <br />

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
