import model from './model';
import { removeUndefined } from '../../lib/remove-falsy';
import { UserInputError } from 'apollo-server-koa';
import crypto from 'crypto';

export const resolvers = {
  Query: {
    allStudents: async (_, { name, cpf, email }) => {
      return model.find(removeUndefined({ name, cpf, email }));
    },
  },
  Mutation: {
    createStudent: async (_, { user }) => {
      return model.create({ id: crypto.randomUUID(), ...user });
    },
    updateStudent: (_, { id, user }) => {
      // TODO IT
      console.log({ id, user });
    },
    deleteStudent: async (_, { id }) => {
      const student = await model.findOne({ id });
      if (student === null) {
        throw new UserInputError('User not found');
      }
      await student.delete();
      return student;
    },
  },
};
