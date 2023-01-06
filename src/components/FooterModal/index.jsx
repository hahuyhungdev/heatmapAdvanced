import { ButtonCustom } from 'components';
import { PropTypes } from 'prop-types';
import React from 'react';

export const FooterModal = ({ onCancel, onFinish }) => {
  return (
    <div key="footerCutom" className="containFooter">
      <button
        key={'back'}
        style={{ marginTop: '10px', border: 'none', background: 'initial', color: '#A85F0A', cursor: 'pointer' }}
        onClick={onCancel}
      >
        Cancel
      </button>
      <ButtonCustom style={{ marginTop: '10px' }} onClick={onFinish} className={undefined} icon={undefined}>
        Save
      </ButtonCustom>
    </div>
  );
};
FooterModal.propTypes = {
  onCancel: PropTypes.func,
  onFinish: PropTypes.func,
};
