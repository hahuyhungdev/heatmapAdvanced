import { Pagination } from 'antd';
import React from 'react';
import { PropTypes } from 'prop-types';
function Page({ pageSize = 10, current, total, onChange }) {
  const _onChange = (page, pageSize) => {
    onChange?.(page, pageSize);
  };
  return <Pagination className="pagination" pageSize={pageSize} current={current} total={total} onChange={_onChange} />;
}
Page.propTypes = {
  pageSize: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
};
export default Page;
