import express from "express";
import {
  requestMaterial,
  getRequests,
  updateRequestStatus,
} from "../controllers/materialController.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, requestMaterial);
router.get("/", protect, adminOnly, getRequests);
router.put("/:id", protect, adminOnly, updateRequestStatus);

export default router;
