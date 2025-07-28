// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus
} = require('../controllers/taskController');

const { protect } = require('../middleware/authMiddleware'); //  your JWT middleware

// Protect all routes
router.get('/', protect, getTasks);
router.post('/', protect, createTask);
router.put('/:id', protect, updateTask);
router.patch('/:id/status', protect, updateTaskStatus);
router.delete('/:id', protect, deleteTask);

module.exports = router;

