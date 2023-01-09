/* eslint-disable no-unused-vars */
import './style.scss';

import { Select, Space, Table } from 'antd';
import { SelectOption } from 'components';
import { IconStatus } from 'components/Icons';
import { IconForklift, IconGroup, IconPerson } from 'components/Icons';
import React, { memo, useState } from 'react';

const columns = [
  {
    title: 'Title',
    dataIndex: 'value',
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
    value: 'Demo tag 1',
    label: 'forklift',
    url_Image: <IconForklift />,
    status: true,
  },
  {
    key: '2',
    value: 'Demo tag 2',
    label: 'forklift',
    url_Image: <IconForklift />,
    status: true,
  },
  {
    key: '3',
    value: 'Demo tag 3 person',
    label: 'person',
    url_Image: <IconPerson />,
    status: false,
  },
  {
    key: '4',
    value: 'Demo tag 4',
    label: 'group',
    url_Image: <IconGroup />,
    status: true,
  },
  {
    key: '5',
    value: 'Demo tag 5 group',
    label: 'group',
    url_Image: <IconGroup />,
    status: true,
  },
  {
    key: '6',
    value: 'Demo tag 6 person',
    label: 'person',
    url_Image: <IconPerson />,
    status: false,
  },
  {
    key: '7',
    value: 'Demo tag forklift 7',
    label: 'forklift',
    url_Image: <IconForklift />,
    status: true,
  },
];

export const TableVehicle = () => {
  const [valueType, setValueType] = useState('');

  const onFilterChange = (_, test) => {
    console.log(test.label);
    setValueType(test.label);
  };
  // const onFilterChange with equal with valueType
  const dataFilter = dataVahicle.filter((item) => {
    if (valueType === '' || valueType == 'All') return true;
    return item.label === valueType;
  });

  const dataSelect = [
    {
      label: 'All',
      value: 'All',
    },
    {
      label: 'forklift',
      value: 'forklift',
    },
    {
      label: 'person',
      value: 'person',
    },
    {
      label: 'group',
      value: 'group',
    },
  ];

  return (
    <div className="tableVahicle">
      <Select options={dataSelect} placeholder="Select Tag" onChange={onFilterChange} />
      <Table columns={columns} dataSource={dataFilter} pagination={false} scroll={{ y: 250 }} />
    </div>
  );
};
export default TableVehicle;
