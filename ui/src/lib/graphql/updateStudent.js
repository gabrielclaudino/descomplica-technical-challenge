import { gql } from '@apollo/client';

export const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation(
    $id: ID!
    $name: String
    $cpf: String
    $email: String
  ) {
    updateStudent(id: $id, data: { name: $name, cpf: $cpf, email: $email }) {
      id
      name
      cpf
      email
    }
  }
`;
