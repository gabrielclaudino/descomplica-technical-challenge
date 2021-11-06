import { gql } from '@apollo/client';

export const ALL_STUDENTS_QUERY = gql`
  query getAllStudentsQuery($name: String, $cpf: String, $email: String) {
    allStudents(name: $name, cpf: $cpf, email: $email) {
      id
      name
      cpf
      email
    }
  }
`;
