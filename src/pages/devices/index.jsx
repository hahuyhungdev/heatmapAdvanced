import './style.scss';

import { Input } from 'antd';
import nodata from 'assets/images/nodata.png';
import { ButtonCustom } from 'components/Button';
import { IconForklift, IconGroup, IconPerson, IconUnion } from 'components/Icons';
import { PopupDevice } from 'components/Popup';
// import { dataVahicle } from 'components/Table';
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
const dataVahicle = [];
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
      {dataVahicle.length === 0 ? (
        <>
          <h3>Objects List</h3>
          <div className="empty">
            <img src={nodata} alt="nodata" />
            <h3>No data</h3>
            <ButtonCustom isIcon icon={<IconUnion />} onClick={showPopup}>
              Create new
            </ButtonCustom>
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
        </>
      ) : (
        <>
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
          <DevicesTable dataDevice={dataVahicle} />
        </>
      )}
    </div>
  );
};

export default Devices;
