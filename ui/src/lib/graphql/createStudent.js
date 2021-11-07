import { gql } from '@apollo/client';

export const CREATE_STUDENTS_QUERY = gql`
  mutation createStudent($student: CreateStudentInput!) {
    createStudent(student: $student) {
      id
      name
      cpf
      email
    }
  }
`;
