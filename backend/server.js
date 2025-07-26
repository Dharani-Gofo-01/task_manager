const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
require('./config/db')(); // MongoDB connection

const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
const commentRoutes = require('./routes/commentRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/tasks/:taskId/comments', commentRoutes);
app.use('/api/users', userRoutes);

// Static React frontend
// app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')); // Adjust 'client' if needed
    });

// React fallback route - must go *after* all API routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
// });

// 404 and global error handler
app.use((req, res, next) => next(createError(404)));

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

module.exports = app;
