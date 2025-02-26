import express from "express";
import { getUserProfile, updateUserProfile } from "../controllers/profileController.js";

const router = express.Router();

// Define routes and link them to controller functions
router.get("/", getUserProfile);
router.post("/", updateUserProfile);

export default router;
