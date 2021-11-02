import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../components/Header';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';

export default function Index() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Header />
      <Container maxWidth={'md'}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {value}
          </Typography>
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
