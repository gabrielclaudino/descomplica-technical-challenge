import { gql } from '@apollo/client';

export const UPDATE_STUDENT_MUTATION = gql`
  mutation UpdateStudentMutation($id: ID!, $student: UpdateStudentInput) {
    updateStudent(id: $id, student: $student) {
      id
      name
      cpf
      email
    }
  }
`;
