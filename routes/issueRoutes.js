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

router.get('/', getAllIssues);
router.get('/:id', getIssue);
router.post('/', protect, createIssue);
router.put('/:id', updateIssue);
router.delete('/:id', protect, deleteIssue);

export default router;
