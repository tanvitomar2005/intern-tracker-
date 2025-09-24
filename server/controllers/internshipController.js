const Internship = require("../models/Internship");

exports.createInternship = async (req, res) => {
  try {
    const internship = await Internship.create({
      title: req.body.title,
      description: req.body.description,
      stipend: req.body.stipend,
      duration: req.body.duration,
      skillsRequired: req.body.skillsRequired,
      type: req.body.type,
      company: req.user._id,
    });
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInternships = async (req, res) => {
  const internships = await Internship.find().populate("company", "name companyName");
  res.json(internships);
};
