import mongoose from 'mongoose';

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

export default mongoose.model('Student', StudentSchema);
