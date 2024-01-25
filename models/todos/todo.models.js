import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subTodo: [
    {
      type: mongoose.Schema.Tyoes.ObjectId,
      ref: "SubTodo",
    },
  ],
});

export const Todo = mongoose.model("Todo", todoSchema);
