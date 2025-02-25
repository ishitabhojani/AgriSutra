const express = require("express");
const { getEquipment } = require("../controllers/euipmentController");
// const pool = require("../db");
const router = express.Router();

// Get All Equipment
router.get("/", getEquipment);

module.exports = router;
