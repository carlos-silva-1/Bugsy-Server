import mongoose from 'mongoose';

const IssueSchema = mongoose.Schema(
{
  title: {
    type: String,
    trim: true,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  condition: {
    type: String,
    required: true,
    default: "Open",
  },
  assignees: [String],
  comments: [String],
});

const Issue = mongoose.model("issue", IssueSchema);

export default Issue;
