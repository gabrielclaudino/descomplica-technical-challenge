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
    createStudent: async (_, { student }) => {
      return model.create({ id: crypto.randomUUID(), ...student });
    },

    updateStudent: async (_, { id, student }) => {
      return await model.findOneAndUpdate(
        { id },
        { $set: { ...removeUndefined(student) } },
        { new: true }
      );
    },

    deleteStudent: async (_, { id }) => {
      const student = await model.findOne({ id });
      if (student === null) {
        throw new UserInputError('Student not found');
      }
      await student.delete();
      return student;
    },
  },
};
