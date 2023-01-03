import { Pagination } from 'antd';
import React from 'react';
import { PropTypes } from 'prop-types';
import clsx from 'clsx';
export function Page({ className, pageSize = 10, current, total, onChange }) {
  const _onChange = (page, pageSize) => {
    onChange?.(page, pageSize);
  };
  return (
    <div className="antCustom">
      <Pagination
        className={clsx('pagination', className)}
        pageSize={pageSize}
        current={current}
        total={total}
        onChange={_onChange}
      />
    </div>
  );
}
Page.propTypes = {
  pageSize: PropTypes.number,
  current: PropTypes.number,
  total: PropTypes.number,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
export default Page;
