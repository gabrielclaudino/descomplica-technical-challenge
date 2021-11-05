import * as React from 'react';
import PropTypes from 'prop-types';
import { DataGrid } from '@mui/x-data-grid';
import { styled } from '@mui/system';

const Wrapper = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  height: '70vh',
  paddingBottom: '2rem',
}));

const StudentsDataGrid = ({
  rows,
  columns,
  loading,
  onFilterChange,
  onEditCommit,
}) => {
  return (
    <Wrapper>
      <DataGrid
        pageSize={25}
        loading={loading}
        rows={rows}
        columns={columns}
        filterMode="server"
        editMode="row"
        onFilterModelChange={onFilterChange}
        onRowEditCommit={onEditCommit}
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
  onFilterChange: PropTypes.func,
  onEditCommit: PropTypes.func,
};

export default StudentsDataGrid;
