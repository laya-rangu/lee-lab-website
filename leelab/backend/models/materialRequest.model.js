// backend/models/materialRequest.model.js
//const mongoose = require("mongoose");
import mongoose from "mongoose";
const materialRequestSchema = new mongoose.Schema(
  {
    requester: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    requesterName: { type: String, required: true },
    requesterEmail: { type: String, required: true },

    itemName: { type: String, required: true },
    quantity: { type: Number, required: true },
    purpose: { type: String },

    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending",
    },
    adminRemarks: { type: String },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("MaterialRequest", materialRequestSchema);
const MaterialRequest = mongoose.model("MaterialRequest", materialRequestSchema);
export default MaterialRequest;