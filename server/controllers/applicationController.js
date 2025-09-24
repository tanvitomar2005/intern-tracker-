const Application = require("../models/Application");

exports.applyInternship = async (req, res) => {
  try {
    const application = await Application.create({
      student: req.user._id,
      internship: req.body.internshipId,
    });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getApplications = async (req, res) => {
  const apps = await Application.find({ student: req.user._id }).populate("internship");
  res.json(apps);
};
