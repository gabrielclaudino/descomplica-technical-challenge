import { gql } from '@apollo/client';

export const DELETE_STUDENT_MUTATION = gql`
  mutation DeleteStudentMutation($id: ID!) {
    deleteStudent(id: $id) {
      id
      name
      cpf
      email
    }
  }
`;
