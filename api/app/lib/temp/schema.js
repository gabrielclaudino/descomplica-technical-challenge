const { gql } = require('apollo-server-koa');

export const typeDefs = gql`
  type Student {
    id: String
    name: String
    cpf: String
    email: String
  }

  type Query {
    allStudents(name: String, cpf: String, email: String): [Student]
  }
`;
