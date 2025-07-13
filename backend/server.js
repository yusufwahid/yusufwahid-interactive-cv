require("dotenv").config();
const pool = require("./db");
const express = require("express");
const cors = require("cors");
const { educationHistory, skills, projects } = require("./data.js");

const app = express();

// Configure CORS to allow requests from your frontend
const allowedOrigins = ["https://yusufwahid-interactive-cv.vercel.app","http://localhost:5173",];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allow necessary methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
  })
);

app.use(express.json());

// API endpoints
// Hapus: const { educationHistory, skills, projects } = require('./data.js');
app.get("/api/education", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM education ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/skills", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM skills ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/projects", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM projects ORDER BY id");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});