import mongoose from "mongoose";

const teachingScheduleSchema = new mongoose.Schema({
  semester: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  schedule: {
    type: String, // e.g. "Mon-Wed-Fri 10:00–11:00 AM"
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const TeachingSchedule = mongoose.model("TeachingSchedule", teachingScheduleSchema);
export default TeachingSchedule;
