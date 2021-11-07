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
    createStudent(user: CreateStudentInput): Student
    updateStudent(user: UpdateStudentInput): Student
    deleteStudent(id: ID!): Student
  }

  input CreateStudentInput {
    name: String!
    cpf: String!
    email: String!
  }

  input UpdateStudentInput {
    id: ID!
    name: String
    cpf: String
    email: String
  }
`;
