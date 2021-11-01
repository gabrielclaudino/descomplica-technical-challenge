import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../components/Header';

export default function Index() {
  const [value, setValue] = React.useState('');

  return (
    <>
      <Header value={value} setValue={setValue} />
      <Container maxWidth={'md'}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom>
            {value}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
