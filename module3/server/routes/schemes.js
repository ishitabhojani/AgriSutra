// server/routes/schemes.js

const express = require("express");
const { handelGetSchemes, handelGetSchemeById, handleSaveScheme } = require("../controllers/schemesController");
// const pool = require("../db");
const authenticateToken = require("../middleware/authMiddleware");
const router = express.Router();

// GET all schemes
router.get("/", handelGetSchemes);

// GET a specific scheme by id
router.get("/:id", handelGetSchemeById);

// POST save scheme (protected route)
router.post("/:id/save", authenticateToken, handleSaveScheme);

module.exports = router;
