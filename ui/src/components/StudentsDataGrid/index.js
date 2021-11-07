import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  height: '70vh',
  paddingBottom: '2rem',
}));

const StudentsDataGrid = ({ rows, columns, loading, onEditCommit }) => {
  return (
    <Wrapper>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={25}
        onCellEditCommit={onEditCommit}
      />
    </Wrapper>
  );
};

StudentsDataGrid.defaultProps = {
  loading: false,
};

StudentsDataGrid.propTypes = {
  rows: PropTypes.arrayOf(Object),
  columns: PropTypes.arrayOf(Object),
  loading: PropTypes.bool,
  onEditCommit: PropTypes.func,
};

export default StudentsDataGrid;
