import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  'padding-top': '2rem',
  height: '80vh',
}));

const StudentsDataGrid = ({ rows, columns }) => {
  return (
    <Wrapper>
      <DataGrid rows={rows} columns={columns} />
    </Wrapper>
  );
};

StudentsDataGrid.propTypes = {
  rows: PropTypes.arrayOf(Object),
  columns: PropTypes.arrayOf(Object),
};

export default StudentsDataGrid;
