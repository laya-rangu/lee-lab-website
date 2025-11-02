import express from "express";
import { getNews, addNews, deleteNews } from "../controllers/newsController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getNews);
router.post("/", protect, adminOnly, addNews);
router.delete("/:id", protect, adminOnly, deleteNews);

export default router;
