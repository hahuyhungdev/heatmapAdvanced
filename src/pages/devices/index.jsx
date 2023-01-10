import './style.scss';

import { Input } from 'antd';
import nodata from 'assets/images/nodata.png';
import { ButtonCustom } from 'components/Button';
import { IconForklift, IconUnion } from 'components/Icons';
import { PopupDevice } from 'components/Popup';
import { dataVahicle } from 'components/Table';
import DevicesTable from 'components/Table/Devices';
import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { dataOptions } from '..';

// const dataVahicle = [];
export const Devices = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newDevice, setNewDevice] = useState(null);
  const [dataFilter, setDataFilter] = useState(dataVahicle);
  const { Search } = Input;
  const showPopup = () => {
    console.log('showPopup');
    setIsModalVisible(true);
  };
  // handle create
  const handleCreate = (values) => {
    console.log('values', values);
    setNewDevice({
      key: Math.random().toString(36).substr(2, 9),
      value: values.name,
      label: Math.random().toString(36).substr(2, 9),
      description: values.description,
      createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updateAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      Icon: <IconForklift />,
      tag: values.tag,
    });
    toast.success('Create success');
    setIsModalVisible(false);
  };
  // handle search data table
  const handleSearch = (value) => {
    console.log('handleSearch', value);
    const filterValue = dataVahicle.filter((item) => {
      return item.value.toLowerCase().includes(value.toLowerCase());
    });
    setDataFilter(filterValue);
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
              <Search placeholder="input search text" onSearch={handleSearch} style={{ width: 200 }} />
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
          <DevicesTable dataDevice={dataFilter} newDevice={newDevice} />
        </>
      )}
    </div>
  );
};

export default Devices;
