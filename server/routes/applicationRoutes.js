const express = require("express");
const router = express.Router();
const Application = require("../models/Application");
const Internship = require("../models/Internship");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Middleware to protect routes
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "No token" });
  }
};

// @route POST /api/applications
router.post("/", protect, async (req, res) => {
  const { internshipId } = req.body;
  try {
    const internship = await Internship.findById(internshipId);
    if (!internship) return res.status(404).json({ message: "Internship not found" });

    const applicationExists = await Application.findOne({ student: req.user._id, internship: internshipId });
    if (applicationExists) return res.status(400).json({ message: "Already applied" });

    const application = await Application.create({ student: req.user._id, internship: internshipId });
    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// @route GET /api/applications (student only)
router.get("/", protect, async (req, res) => {
  try {
    const applications = await Application.find({ student: req.user._id })
      .populate("internship", "title description skillsRequired type");
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
