import { Schema, model } from "mongoose";

const postSchema: Schema = new Schema({
  createdAt: Date,
  updatedAt: Date,
  title: {
    type: String,
    default: "",
    required: true
  },
  content: {
    type: String,
    default: "",
    required: true
  },
  slug: {
    type: String,
    default: "",
    required: true,
    unique: true,
    lowercase: true
  },
  featuredImage: {
    type: String,
    default: ""
  }
});

export default model("Post", postSchema);