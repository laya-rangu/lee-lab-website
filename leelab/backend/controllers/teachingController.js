import TeachingSchedule from "../models/teachingSchedule.model.js";

export const getTeaching = async (req, res) => {
  const schedule = await TeachingSchedule.find();
  res.json(schedule);
};

export const addTeaching = async (req, res) => {
  const entry = new TeachingSchedule(req.body);
  const saved = await entry.save();
  res.status(201).json(saved);
};

export const updateTeaching = async (req, res) => {
  const updated = await TeachingSchedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteTeaching = async (req, res) => {
  await TeachingSchedule.findByIdAndDelete(req.params.id);
  res.json({ message: "Teaching schedule deleted" });
};
