/* eslint-disable no-unused-vars */
import './style.scss';

import { Table } from 'antd';
import nodata from 'assets/images/nodata.png';
import { ButtonCustom } from 'components/Button';
import { IconUnion } from 'components/Icons';
import { ModalAlert } from 'components/Modal';
import { PopupTag } from 'components/Popup';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const TagsTable = ({ dataTag, newValue }) => {
  const [dataSource, setDataSources] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataRows, setDataRows] = useState(null);

  const [isModalEdit, setIsModalEdit] = useState(false);
  const [isModalConfirm, setIsModalConfirm] = useState(false);
  const [isModalCreate, setIsModalCreate] = useState(false);
  useEffect(() => {
    setDataSources(dataTag);
  }, [dataTag]);
  // new value
  useEffect(() => {
    if (newValue) {
      setDataSources([...dataSource, newValue]);
    }
  }, [newValue]);
  // get name tag push to array
  const nameTag = dataSource.map((item) => item.value);
  console.log('nameTag', nameTag);
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
            value: values.nameTag,
            description: values.description,
          };
        }
        console.log('item', item);
        return item;
      }),
    );
    setIsModalEdit(false);
    toast.success('Edit success');
  };
  useEffect(() => {
    setDataSources(dataTag);
  }, [dataTag]);
  const columns = [
    {
      title: 'Name tag',
      dataIndex: 'value',
      key: 'value',
      render: (text) => <a>{text}</a>,
      width: 150,
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
      sorter: (a, b) => a.createAt - b.createAt,
      width: 200,
    },
    {
      title: 'Update at',
      dataIndex: 'updateAt',
      key: 'updateAt',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.updateAt - b.updateAt,
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
    <div className="TagsTable">
      {isModalConfirm && (
        <ModalAlert
          onFinish={handleDelete}
          onCancel={handleCancel}
          title="Are you sure delete this tag?"
          content="You can’t undo this action"
          onOpen={isModalConfirm}
        />
      )}
      {isModalEdit && (
        <PopupTag
          onFinish={handleEdit}
          onInitialValues={dataRows}
          title="Edit Object"
          onCancel={handleCancel}
          onOpen={isModalEdit}
        />
      )}

      <Table
        locale={{
          emptyText: (
            <div className="empty">
              <img src={nodata} alt="nodata" />
              <h3>No data</h3>
              <ButtonCustom isIcon icon={<IconUnion />}>
                Create new
              </ButtonCustom>
            </div>
          ),
        }}
        rowSelection={rowSelection}
        columns={columns}
        dataSource={dataSource}
        scroll={{ y: 430 }}
        pagination={{
          position: ['bottomRight'],
          showTotal: (total, range) => {
            return `${range[0]}-${range[1]} of ${total} items`;
          },
          pageSize: 10,
        }}
      />
    </div>
  );
};
TagsTable.propTypes = {
  dataTag: PropTypes.array,
  newValue: PropTypes.object,
};
