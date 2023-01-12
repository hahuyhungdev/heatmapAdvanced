import './style.scss';

import { Input } from 'antd';
import nodata from 'assets/images/nodata.png';
import { ButtonCustom } from 'components/Button';
import { IconUnion } from 'components/Icons';
import { PopupTag } from 'components/Popup';
import { TagsTable } from 'components/Table';
import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// const Taglist = [
//   {
//     key: '1',
//     value: 'dau',
//     label: 'Tag 01',
//     description: 'auctor at tortor imperdiet amet id sed rhoncus.',
//     createAt: '2021-05-01 12:30:00',
//     updateAt: '2021-05-01 12:00:00',
//   },
// ];
const Taglist = [
  {
    key: '1',
    value: 'dau',
    label: 'Tag 01',
    description: 'auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:30:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '2',
    value: 'tag2',
    label: 'Tag 02',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:40:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '3',
    value: 'tag3',
    label: 'Tag 03',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:20:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '4',
    value: 'tag4',
    label: 'Tag 04',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '5',
    value: 'tag5',
    label: 'Tag 01',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '6',
    value: 'tag 6',
    label: 'Tag 02',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '7',
    value: 'tag 7',
    label: 'Tag 03',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '8',
    value: 'tag 8',
    label: 'Tag 04',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '9',
    value: 'tag 9',
    label: 'Tag 01',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '10',
    value: 'tag 10',
    label: 'Tag 02',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '11',
    value: 'tag3',
    label: 'Tag 03',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '12',
    value: 'tag4',
    label: 'Tag 04',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '13',
    value: 'tag1',
    label: 'Tag 01',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '14',
    value: 'tag2',
    label: 'Tag 02',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '15',
    value: 'tag3',
    label: 'Tag 03',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '16',
    value: 'cuoi',
    label: 'Tag cuoi',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '17',
    value: 'tag5',
    label: 'Tag 03',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '18',
    value: 'cuoi6',
    label: 'Tag cuoi',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '19',
    value: 'cuoi7',
    label: 'Tag cuoi',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '20',
    value: 'cuoi8',
    label: 'Tag cuoi',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
  {
    key: '21',
    value: 'cuoi9',
    label: 'Tag cuoi',
    description: 'Vel cras auctor at tortor imperdiet amet id sed rhoncus.',
    createAt: '2021-05-01 12:00:00',
    updateAt: '2021-05-01 12:00:00',
  },
];

export const Tags = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newTag, setNewTag] = useState(null);
  const [dataFilter, setDataFilter] = useState(Taglist);

  const { Search } = Input;
  const showPopup = () => {
    console.log('showPopup');
    setIsModalVisible(true);
  };
  // handle create
  const handleCreate = (values) => {
    console.log('handleCreate', values);
    setNewTag({
      key: Math.random().toString(36).substr(2, 9),
      value: values.nameTag,
      label: Math.random().toString(36).substr(2, 9),
      description: values.description,
      createAt: moment().format('YYYY-MM-DD HH:mm:ss'),
      updateAt: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
    toast.success('Create success');
    setIsModalVisible(false);
  };
  // handle search data table
  const handleSearch = (value) => {
    console.log('handleSearch', value);
    const filterValue = Taglist.filter((item) => {
      return item.value.toLowerCase().includes(value.toLowerCase());
    });
    setDataFilter(filterValue);
  };
  return (
    <div className="mainTags">
      {Taglist.length === 0 ? (
        <>
          <h3>Tags List</h3>
          <div className="empty">
            <img src={nodata} alt="nodata" />
            <h3>No data</h3>
            <ButtonCustom isIcon icon={<IconUnion />} onClick={showPopup}>
              Create new
            </ButtonCustom>
            {isModalVisible && (
              <PopupTag
                onFinish={handleCreate}
                title="Add Object"
                onCancel={() => setIsModalVisible(false)}
                onOpen={isModalVisible}
              />
            )}
          </div>
        </>
      ) : (
        <>
          <header>
            <title>Tags List</title>
            <div className="toolbar">
              <Search placeholder="Search" onSearch={handleSearch} style={{ width: 200 }} />
              <ButtonCustom onClick={showPopup}>create</ButtonCustom>
              {isModalVisible && (
                <PopupTag
                  onFinish={handleCreate}
                  title="Add Object"
                  onCancel={() => setIsModalVisible(false)}
                  onOpen={isModalVisible}
                />
              )}
            </div>
          </header>
          <TagsTable dataTag={dataFilter} newValue={newTag} />
        </>
      )}
    </div>
  );
};

export default Tags;
