// server/routes/schemes.js

const express = require("express");
const pool = require("../db");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

// GET all schemes
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM schemes ORDER BY id");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET a specific scheme by id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM schemes WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Scheme not found" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST save scheme (protected route)
router.post("/:id/save", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id; // Set by authentication middleware
  try {
    // Example: Insert into a "saved_schemes" table (create this table as needed)
    await pool.query("INSERT INTO saved_schemes (user_id, scheme_id) VALUES ($1, $2)", [userId, id]);
    res.json({ message: "Scheme saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
