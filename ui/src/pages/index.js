import * as React from 'react';
import { Box, Container, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useMutation, useQuery } from '@apollo/client';
import { addApolloState, initializeApollo } from '../lib/apollo';
import { ALL_STUDENTS_QUERY } from '../lib/graphql/allStudents';
import { UPDATE_STUDENT_MUTATION } from '../lib/graphql/updateStudent';

import Header from '../components/Header';
import StudentsDataGrid from '../components/StudentsDataGrid';

const Index = () => {
  const { data, loading, error, refetch } = useQuery(ALL_STUDENTS_QUERY, {});
  const [
    updateStudent,
    { error: mutErrro },
  ] = useMutation(UPDATE_STUDENT_MUTATION);

  const columns = [
    {
      field: 'name',
      headerName: 'Nome do Aluno',
      width: 200,
      editable: true,
    },
    {
      field: 'cpf',
      headerName: 'CPF',
      width: 150,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
  ];

  const rows = data?.allStudents || [];

  const handleEditCommit = ({ field, id, value }) => {
    updateStudent({
      variables: {
        id,
        student: { [field]: value },
      },
    });
  };

  if (mutErrro) {
    console.error('Error', mutErrro);
  }

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
          Visualize ou edite seus estudantes
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          <StudentsDataGrid
            rows={rows}
            columns={columns}
            loading={loading}
            error={error}
            onEditCommit={handleEditCommit}
          />
        </Box>
      </Container>
      <Box
        sx={{
          display: { xs: 'none', md: 'none' },
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
      revalidate: 1,
    });
  } catch {
    return {
      props: {},
    };
  }
};

export default Index;
