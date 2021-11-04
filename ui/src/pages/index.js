import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import StudentsDataGrid from '../components/StudentsDataGrid';

export default function Index() {
  const columns = [];
  const rows = [];

  return (
    <>
      <Header />
      <Container maxWidth={'md'}>
        <Box>
          <StudentsDataGrid rows={rows} columns={columns} />
        </Box>
      </Container>

      <Fab
        color="primary"
        aria-label="Adicionar"
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          display: { xs: 'block', md: 'none' },
        }}
      >
        <AddIcon />
      </Fab>
    </>
  );
}
