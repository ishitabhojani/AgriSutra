const express = require("express");
const pool = require("../db");
const router = express.Router();

// Get All Equipment
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM equipment");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
