// backend/server.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS to allow frontend to access the backend
app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/education', (req, res) => {
  res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
  res.json(skills);
});

app.get('/api/projects', (req, res) => {
  res.json(projects);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;