import { gql } from '@apollo/client';

export const ALL_STUDENTS_QUERY = gql`
  query getAllStudentsQuery {
    allStudents {
      id
      name
      cpf
      email
    }
  }
`;
