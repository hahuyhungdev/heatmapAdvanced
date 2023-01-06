import { Space, Table } from 'antd';
// import { SelectOption } from 'components/Dropdown';
import { IconStatus } from 'components/Icons';
import React, { useState } from 'react';

const columns = [
  {
    title: 'Title',
    dataIndex: 'label',
    key: 'Title',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (_, record) => (
      <Space size="middle">
        <IconStatus fill={record.status ? '#C17115' : '#8C8C8C'} />
      </Space>
    ),
    width: 75,
  },
];
const dataVahicle = [
  {
    key: '1',
    label: 'Demo tag 1',
    value: 'Demo tag 1',
    status: true,
  },
  {
    key: '2',
    label: 'Demo tag 2',
    value: 'Demo tag 2',
    status: true,
  },
  {
    key: '3',
    label: 'Demo tag 3',
    value: 'Demo tag 3',
    status: false,
  },
  {
    key: '4',
    label: 'Demo tag 4',
    value: 'Demo tag 4',
    status: true,
  },
  {
    key: '5',
    label: 'Demo tag 5',
    status: true,
  },
  {
    key: '6',
    label: 'Demo tag 6',
    status: false,
  },
];

export const TableVehicle = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      // Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'even',
        text: 'Select Status On Row',
        onSelect: (changableRowKeys) => {
          //dataVahicle select status true
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (dataVahicle[index].status === true) return true;
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <div className="tableVahicle">
      {/* <SelectOption options={selectTitle} placeholder="Select Tag" /> */}
      <Table
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataVahicle}
        pagination={false}
        // scroll={{ x: 100, y: 300 }}
        scroll={{ y: 300 }}
      />
    </div>
  );
};
