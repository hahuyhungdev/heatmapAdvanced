/* eslint-disable no-unused-vars */
import './style.scss';

import { Space, Table } from 'antd';
import { IconStatus } from 'components/Icons';
import { ModalAlert } from 'components/Modal';
import { PopupDevice } from 'components/Popup';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { dataVahicle } from '../Vehicle';

const DevicesTable = () => {
  const [dataSource, setDataSources] = useState(dataVahicle);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataRows, setDataRows] = useState(null);

  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const handleCancel = () => {
    console.log('Cancel');
    setIsModalConfirm(false);
    setIsModalEdit(false);
  };

  // func handle delete
  const handleDelete = () => {
    console.log('dataRows', dataRows);
    setDataSources(dataSource.filter((item) => item.key !== dataRows.key));
    setIsModalConfirm(false);
    toast.success('Delete success');
  };
  // func handle edit
  const handleEdit = (values) => {
    console.log('values', values);
    setDataSources(
      dataSource.map((item) => {
        if (item.key === dataRows.key) {
          return {
            ...item,
            value: values.name,
            tag: values.tag,
            description: values.description,
          };
        }
        return item;
      }),
    );
    setIsModalEdit(false);
    toast.success('Edit success');
  };
  useEffect(() => {
    console.log('dataSource', dataSource);
  }, [dataSource]);
  const columns = [
    {
      title: 'Icon',
      dataIndex: 'Icon',
      key: 'Icon',
      render: (text) => <a>{text}</a>,
      width: 75,
    },
    {
      title: 'Name device',
      dataIndex: 'value',
      key: 'value',
      render: (text) => <a>{text}</a>,
      width: 150,
    },
    {
      title: 'Tag',
      dataIndex: 'tag',
      key: 'tag',
      render: (text) => <a>{text}</a>,
      width: 75,
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
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Create at',
      dataIndex: 'createAt',
      key: 'createAt',
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: 'Update at',
      dataIndex: 'updateAt',
      key: 'updateAt',
      render: (text) => <a>{text}</a>,
      width: 200,
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      key: 'Action',
      render: (_, record) => (
        <div className="action" style={{ display: 'flex', justifyContent: 'center', columnGap: '16px' }}>
          <span
            onClick={() => {
              setIsModalEdit(true);
              setDataRows(record);
            }}
          >
            Edit
          </span>
          <span
            onClick={() => {
              setIsModalConfirm(true);
              setDataRows(record);
            }}
          >
            Delete
          </span>
        </div>
      ),

      width: 120,
    },
  ];
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT],
  };

  return (
    <div className="DevicesTable">
      {isModalConfirm && (
        <ModalAlert
          onFinish={handleDelete}
          onCancel={handleCancel}
          title="Are you sure delete this device?"
          content="You can’t undo this action"
          onOpen={isModalConfirm}
        />
      )}
      <br />
      {isModalEdit && (
        <PopupDevice
          onFinish={handleEdit}
          onInitialValues={dataRows}
          title="Edit Object"
          options={dataVahicle}
          onCancel={handleCancel}
          onOpen={isModalEdit}
        />
      )}
      <Table rowSelection={rowSelection} columns={columns} dataSource={dataSource} scroll={{ y: 430 }} />
    </div>
  );
};

export default DevicesTable;
