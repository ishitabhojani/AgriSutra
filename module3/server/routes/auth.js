const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
//const pool = require("../db");

const { handleUserRegister, handleUserProfile, handleUserLogin } = require("../controllers/authController");

require("dotenv").config();

const router = express.Router();

// ✅ User Registration Route
router.post("/register", handleUserRegister);
router.get("/userProfile", handleUserProfile);
// ✅ User Login Route
router.post("/login", handleUserLogin);

module.exports = router;

