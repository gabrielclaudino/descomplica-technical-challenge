import { gql } from '@apollo/client';

export const CREATE_STUDENTS_QUERY = gql`
  mutation createStudent($name: String!, $cpf: String!, $email: String!) {
    createStudent(student: { name: $name, cpf: $cpf, email: $email }) {
      id
      name
      cpf
      email
    }
  }
`;
