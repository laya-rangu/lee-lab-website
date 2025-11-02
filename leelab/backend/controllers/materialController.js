import MaterialRequest from "../models/materialRequest.model.js";

export const requestMaterial = async (req, res) => {
  const { itemName, quantity, purpose } = req.body;

  const request = await MaterialRequest.create({
    requester: req.user._id,
    requesterName: req.user.name,
    requesterEmail: req.user.email,
    itemName,
    quantity,
    purpose,
  });

  res.status(201).json(request);
};

export const getRequests = async (req, res) => {
  const requests = await MaterialRequest.find().populate("requester", "name email");
  res.json(requests);
};

export const updateRequestStatus = async (req, res) => {
  const { status, adminRemarks } = req.body;
  const reqDoc = await MaterialRequest.findByIdAndUpdate(
    req.params.id,
    { status, adminRemarks },
    { new: true }
  );
  res.json(reqDoc);
};
