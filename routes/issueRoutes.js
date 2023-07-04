import express from 'express';
import {
  createIssue,
  getAllIssues,
  getIssue,
  updateIssue,
  deleteIssue,
} from '../controllers/issueController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', protect, getAllIssues);
router.get('/:id', protect, getIssue);
router.post('/', protect, createIssue);
router.put('/:id', protect, updateIssue);
router.delete('/:id', protect, deleteIssue);

export default router;
