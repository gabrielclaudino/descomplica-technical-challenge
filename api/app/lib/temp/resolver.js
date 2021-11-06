import model from '../../domain/student/model';
import { removeUndefined } from '../remove-falsy';

export const resolvers = {
  Query: {
    allStudents: async (_, { name, cpf, email }) => {
      return model.find(removeUndefined({ name, cpf, email }));
    },
  },
};
