import './style.scss';

import { Input } from 'antd';
import { ButtonCustom } from 'components/Button';
import { IconForklift, IconGroup, IconPerson } from 'components/Icons';
import { PopupDevice } from 'components/Popup';
import DevicesTable from 'components/Table/Devices';
import React, { useState } from 'react';
const dataOptions = [
  {
    value: 'hahuyhung',
    label: 'Forklift   ',
    Icon: <IconForklift />,
  },
  {
    value: 'hahuyhung1',
    label: 'Person',
    Icon: <IconPerson />,
  },
  {
    value: 'Group',
    label: 'Group',
    Icon: <IconGroup />,
  },
];
export const Devices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const onSearch = (value) => console.log(value);
  const { Search } = Input;
  const showPopup = () => {
    console.log('showPopup');
    setIsModalVisible(true);
  };
  // handle create
  const handleCreate = (values) => {
    console.log('values', values);
    setIsModalVisible(false);
  };
  return (
    <div className="mainDevices">
      <header>
        <title>Objects List</title>
        <div className="toolbar">
          <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
          <ButtonCustom onClick={showPopup}>create</ButtonCustom>
          {isModalVisible && (
            <PopupDevice
              onFinish={handleCreate}
              title="Create Object"
              options={dataOptions}
              onCancel={() => setIsModalVisible(false)}
              onOpen={isModalVisible}
            />
          )}
        </div>
      </header>
      <DevicesTable />
    </div>
  );
};

export default Devices;
