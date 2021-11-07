import { gql } from 'apollo-server-koa';

export const typeDefs = gql`
  type Student {
    id: ID!
    name: String
    cpf: String
    email: String
  }

  type Query {
    allStudents(name: String, cpf: String, email: String): [Student]
  }

  type Mutation {
    createStudent(student: CreateStudentInput): Student
    updateStudent(id: ID!, student: UpdateStudentInput): Student
    deleteStudent(id: ID!): Student
  }

  input CreateStudentInput {
    name: String!
    cpf: String!
    email: String!
  }

  input UpdateStudentInput {
    name: String
    cpf: String
    email: String
  }
`;
