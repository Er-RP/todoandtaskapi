import { Schema, Model, model } from 'mongoose';
import { INote } from '../Types';

const NoteSchema = new Schema({
    content: {
      type: String,
      required: true,
    },
    task: {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    sharedWith: {
      type: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    },
  });

  export const Note: Model<INote> = model<INote>('Note', NoteSchema);
