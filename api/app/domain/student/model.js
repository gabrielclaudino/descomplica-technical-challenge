import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

const StudentSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String },
    cpf: { type: String },
    email: { type: String },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'student',
  }
);

StudentSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
StudentSchema.plugin(mongooseDelete, { deletedAt: true });

export default mongoose.model('Student', StudentSchema);
