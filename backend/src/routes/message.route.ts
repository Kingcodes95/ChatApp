import express from "express";
import { sendMessage, getMessages, getUserForSidebar } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/conversations", protectRoute, getUserForSidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;