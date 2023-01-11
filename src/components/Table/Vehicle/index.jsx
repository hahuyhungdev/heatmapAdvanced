import './style.scss';

import { Select, Space, Table } from 'antd';
import { IconForklift, IconGroup, IconPerson, IconStatus } from 'components/Icons';
import { sidebarRightSelector } from 'config/sidebarRightSlice';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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
export const dataVahicle = [
  {
    key: '1',
    value: 'Demo tag 1',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 01',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '2',
    value: 'Demo tag 2',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 02',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '3',
    value: 'Demo tag 3 person',
    label: 'person',
    Icon: <IconPerson />,
    status: false,
    tag: 'Tag 03',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '4',
    value: 'Demo tag 4',
    label: 'group',
    Icon: <IconGroup />,
    status: true,
    tag: 'Tag 04',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '5',
    value: 'Demo tag 5 group',
    label: 'group',
    Icon: <IconGroup />,
    status: true,
    tag: 'Tag 05',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '6',
    value: 'Demo tag 6 person',
    label: 'person',
    Icon: <IconPerson />,
    status: false,
    tag: 'Tag 06',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '7',
    value: 'Demo tag forklift 7',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 07',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '8',
    value: 'Demo tag 8',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 08',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '9',
    value: 'Demo tag 9',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 09',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
  {
    key: '10',
    value: 'Demo tag 10',
    label: 'forklift',
    Icon: <IconForklift />,
    status: true,
    tag: 'Tag 10',
    description: 'Description 01',
    createAt: '2021-02-05 08:28:36 ',
    updateAt: '2021-02-05 08:28:36 ',
  },
];

export const TableVehicle = () => {
  const [valueType, setValueType] = useState('');
  const { isVisableLineTrace } = useSelector(sidebarRightSelector);

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
      <Table
        columns={columns}
        dataSource={dataFilter}
        pagination={false}
        scroll={{ y: isVisableLineTrace ? 150 : 270 }}
      />
    </div>
  );
};
export default TableVehicle;
