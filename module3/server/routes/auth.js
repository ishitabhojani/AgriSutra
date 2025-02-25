const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const pool = require("../db");
const {
    createUser,
    getUserByUsername,
    getUserByEmail,
    getUserById,
} = require("../models/User");

require("dotenv").config();

const router = express.Router();

// ✅ User Registration Route
router.post("/register", async(req, res) => {
    const { name, username, email, password } = req.body;

    try {
        console.log("🔹 Received Registration Request:", req.body);

        if (!name || !username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await getUserByEmail(email);
        console.log("🔹 Existing User Check:", existingUser);

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("🔹 Hashed Password:", hashedPassword);

        const newUser = await createUser(name, username, email, hashedPassword);
        console.log("✅ New User Created:", newUser);

        const token = jwt.sign({ id: newUser.id, email: newUser.email },
            process.env.JWT_SECRET, { expiresIn: "7d" }
        );

        res
            .status(201)
            .json({ message: "User created successfully", token, user: newUser });
    } catch (error) {
        console.error("❌ Error registering user:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
router.get("/userProfile", async(req, res) => {
    try {
        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) return res.status(401).json({ message: "Unauthorized" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await getUserById(decoded.id); // ✅ Fetch by ID instead of username

        if (!user) return res.status(404).json({ message: "User not found" });

        res.json({ name: user.name, email: user.email, username: user.username });
    } catch (error) {
        console.error("❌ Error fetching user profile:", error);
        res.status(500).json({ message: "Server error" });
    }
});
// ✅ User Login Route
router.post("/login", async(req, res) => {
    const { username, password } = req.body;

    try {
        console.log("🔹 Received Login Request:", req.body);

        if (!username || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await getUserByUsername(username);
        console.log("🔹 Found User:", user);

        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("🔹 Password Valid:", isPasswordValid);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user.id, username: user.username },
            process.env.JWT_SECRET, { expiresIn: "24h" }
        );

        res.json({ message: "Login successful", token });
    } catch (error) {
        console.error("❌ Error logging in:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

module.exports = router;

