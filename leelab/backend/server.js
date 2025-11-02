// backend/server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import peopleRoutes from "./routes/peopleRoutes.js";
import publicationRoutes from "./routes/publicationRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import equipmentRoutes from "./routes/equipmentRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import teachingRoutes from "./routes/teachingRoutes.js";
import researchRoutes from "./routes/researchRoutes.js";

import { notFound, errorHandler } from "./middleware/errorHandler.js";

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON
app.use(cors());         // Allow cross-origin requests (for React frontend)

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/people", peopleRoutes);
app.use("/api/publications", publicationRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/equipment", equipmentRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/teaching", teachingRoutes);
app.use("/api/research", researchRoutes);

// Health check route
app.get("/", (req, res) => {
  res.send("✅ Lab Website API is running...");
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
