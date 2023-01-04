import { Button, Pagination, Space } from 'antd';
import { ButtonCustom, Page, PopupCRUD, ModalAlert, PopupMap } from 'components';
import { IconPerson, IconForklift, IconGroup } from 'components/Icons';

import { useState } from 'react';
import './style.scss';
export const Devices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [isModalMap, setIsModalMap] = useState(false);

  const [count, setCount] = useState(0);

  const showPopup = () => {
    console.log('showPopup');
    setIsModalVisible(true);
    // setIsModalEdit(true);
    // setIsModalMap(true);
  };

  const handleCancel = () => {
    console.log('Cancel');
    setIsModalVisible(false);
    setIsModalConfirm(false);
    setIsModalEdit(false);
    setIsModalMap(false);
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

  const increaseCount = () => {
    console.log('increaseCount');
    setCount(count + 1);
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
        <ButtonCustom
          onClick={() => {
            setIsModalMap(true);
          }}
        >
          Select file
        </ButtonCustom>
        {isModalMap && <PopupMap title="Upload Map" onCancel={handleCancel} onOpen={isModalMap} />}
        {isModalConfirm && (
          <ModalAlert
            onCancel={handleCancel}
            title="Are you sure delete this device?"
            content="You can’t undo this action"
            onOpen={isModalConfirm}
          />
        )}
        <br />
        <ButtonCustom onClick={() => setIsModalConfirm(true)}>confirm</ButtonCustom>
        {isModalConfirm && (
          <ModalAlert
            onCancel={handleCancel}
            title="Are you sure delete this device?"
            content="You can’t undo this action"
            onOpen={isModalConfirm}
          />
        )}
        <span> bấm zô đây để create popup</span>
        <ButtonCustom onClick={showPopup}>create</ButtonCustom>
        {isModalVisible && (
          <PopupCRUD title="Create Object" options={dataOptions} onCancel={handleCancel} onOpen={isModalVisible} />
        )}
        <br />
        <span> bấm zô đây để edit popup</span>
        <ButtonCustom
          style={{
            backgroundColor: '#e66363',
          }}
          onClick={() => {
            setIsModalEdit(true);
          }}
        >
          edit
        </ButtonCustom>
        {isModalEdit && (
          <PopupCRUD title="Edit Object" options={dataOptions} onCancel={handleCancel} onOpen={isModalEdit} />
        )}
        <br />
        <ButtonCustom> test</ButtonCustom>
        <Page total={500} current={6} />
        <br />
        <Pagination defaultCurrent={6} total={500} />
        <h1>Hello world!</h1>
        <Space wrap>
          <Button type="primary" danger onClick={increaseCount}>
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
