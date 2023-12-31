import asyncHandler from 'express-async-handler';
import Issue from '../models/issueModel.js';

const createIssue = asyncHandler(async (req, res) => {
  const { title, category, priority, description, condition, assignees } = req.body;

  const issueExists = await Issue.findOne({ title });

  if(issueExists) {
    res.status(400);
    throw new Error('Issue already exists. Issues must have different titles.');
  }

  const issue = await Issue.create({
    title,
    category,
    priority,
    description, 
    condition, 
    assignees,
  });

  if(issue) {
  	res.json(issue);
  }
  else {
  	res.status(400).json('Invalid issue');
  }
});

const getAllIssues = asyncHandler(async(req, res) => {
	const issues = await Issue.find({});

	if(issues) {
		res.json(issues);
	}
	else {
		res.status(400).json('No issues found');
	}
});

const getIssue = asyncHandler(async(req, res) => {
	const issue = await Issue.findById(req.params.id);
	if(issue) {
		res.json(issue);
	} 
	else {
		res.status(400).json('Issue not found');
	}
});

const updateIssue = asyncHandler(async(req, res) => {
	const issue = await Issue.findById(req.params.id);
	if(issue) {
		issue.title = req.body.title;
		issue.category = req.body.category;
		issue.priority = req.body.priority;
		issue.description = req.body.description;
		issue.condition = req.body.condition;
		issue.assignees = req.body.assignees;
		issue.comments = req.body.comments;

		issue.save();
		res.json(issue);
	} 
	else {
		res.status(400).json('Issue not found');
	}
});

const deleteIssue = asyncHandler(async(req, res) => {
	const issue = await Issue.findById(req.params.id);

	if(issue) {
		const obj = await Issue.deleteOne({ _id: req.params.id });
		res.json({ success: true });
	}
	else {
		res.status(400).json('Issue not found');
	}
});

export {
  createIssue,
  getAllIssues,
  getIssue,
  updateIssue,
  deleteIssue,
};
