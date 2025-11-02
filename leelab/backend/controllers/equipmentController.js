import Equipment from "../models/equipment.model.js";

export const getEquipment = async (req, res) => {
  const equipment = await Equipment.find();
  res.json(equipment);
};

export const addEquipment = async (req, res) => {
  const eq = new Equipment(req.body);
  const saved = await eq.save();
  res.status(201).json(saved);
};

export const updateEquipment = async (req, res) => {
  const eq = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(eq);
};

export const deleteEquipment = async (req, res) => {
  await Equipment.findByIdAndDelete(req.params.id);
  res.json({ message: "Equipment deleted" });
};
