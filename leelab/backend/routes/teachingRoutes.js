import express from "express";
import {
  getTeaching,
  addTeaching,
  updateTeaching,
  deleteTeaching,
} from "../controllers/teachingController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getTeaching);
router.post("/", protect, adminOnly, addTeaching);
router.put("/:id", protect, adminOnly, updateTeaching);
router.delete("/:id", protect, adminOnly, deleteTeaching);

export default router;
