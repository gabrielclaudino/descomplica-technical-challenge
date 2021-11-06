import model from './model';
import { removeUndefined } from '../../lib/remove-falsy';
import crypto from 'crypto';

export const resolvers = {
  Query: {
    allStudents: async (_, { name, cpf, email }) => {
      return model.find(removeUndefined({ name, cpf, email }));
    },
  },
  Mutation: {
    createStudent: (_, { user }) => {
      return model.create({ id: crypto.randomUUID(), ...user });
    },
    updateStudent: (_, { id, user }) => {
      // TODO IT
      console.log({ id, user });
    },
    deleteStudent: (_, { id }) => {
      // TODO IT
      console.log(id);
    },
  },
};
