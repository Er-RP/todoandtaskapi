import { Schema, Model, model } from 'mongoose';
import { ITask } from '../Types';

const TaskSchema = new Schema({
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    dueDate: {
      type: Date,
    },
    project: {
      type: String,
    },
    component: {
      type: String,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High'],
    },
    labels: {
      type: [String],
    },
    sharedWith: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
    notes: {
      type: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
    },
  });

export const Task: Model<ITask> = model<ITask>('Task', TaskSchema);