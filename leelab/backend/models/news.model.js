// backend/models/News.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const newsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String },
    link: { type: String },
    date: { type: Date, default: Date.now },
    source: { type: String, enum: ["manual", "twitter"], default: "manual" },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("News", newsSchema);
const News = mongoose.model("News", newsSchema);
export default News;