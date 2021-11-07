import * as React from 'react';
import { Box, Container, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useQuery } from '@apollo/client';
import { ALL_STUDENTS_QUERY } from '../lib/graphql/allStudents';
import { addApolloState, initializeApollo } from '../lib/apollo';

import Header from '../components/Header';
import StudentsDataGrid from '../components/StudentsDataGrid';
import filterOperators from '../lib/FilterOperators';

const Index = () => {
  const { data, loading, error } = useQuery(ALL_STUDENTS_QUERY, {});

  const columns = [
    {
      field: 'name',
      headerName: 'Nome do Aluno',
      filterOperators,
      width: 200,
      editable: true,
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      filterOperators,
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      filterOperators,
      width: 200,
      editable: true,
    },
  ];

  const rows = data?.allStudents || [];

  // TODO: implement this
  const handleFilterModelChange = () => {
    console.log('handleFilterModelChange');
  };

  // TODO: implement this
  const handleEditCommit = () => {
    console.log('handleEditCommit');
  };

  return (
    <>
      <Header />
      <Container maxWidth={'md'}>
        <Typography
          pt={1}
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontWeight: 'bold' }}
        >
          Lista de Alunos
        </Typography>

        <Typography align="center" pt={3} pb={2}>
          Visualize, edite, ou até insira novos estudantes
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <StudentsDataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            error={error}
            onFilterChange={handleFilterModelChange}
            onEditCommit={handleEditCommit}
          />
        </Box>
      </Container>
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          width: '100%',
          justifyContent: 'center',
          bottom: '3vh',
        }}
      >
        <Fab color="primary" aria-label="Adicionar">
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {
  const client = initializeApollo();

  try {
    await client.query({ query: ALL_STUDENTS_QUERY });

    return addApolloState(client, {
      props: {},
      revalidate: 60,
    });
  } catch {
    return {
      props: {},
    };
  }
};

export default Index;
