import { ButtonCustom } from 'components/Button';
import { IconDownload } from 'components/Icons';
import * as FileSaver from 'file-saver';
import PropTypes from 'prop-types';
import React from 'react';
import XLSX from 'sheetjs-style';

export const ExcelExport = (excelData) => {
  const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const exportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(excelData.excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, 'dataReport' + fileExtension);
  };
  return (
    <ButtonCustom isIcon icon={<IconDownload />} onClick={() => exportToExcel()}>
      Get file
    </ButtonCustom>
  );
};
ExcelExport.propTypes = {
  excelData: PropTypes.array,
};
