const express = require("express");
const router = express.Router();
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

// @route POST /api/internships (employer only)
// POST /api/internships
router.post("/", protect, async (req, res) => {
  if (req.user.role !== "employer") return res.status(403).json({ message: "Not allowed" });
  const { title, description, stipend, duration, skillsRequired, type } = req.body;
  try {
    const internship = await Internship.create({
      title, description, stipend, duration, skillsRequired, type, employer: req.user._id
    });
    res.status(201).json(internship);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// @route GET /api/internships
// @route GET /api/internships/match
router.get("/match", protect, async (req, res) => {
  if (req.user.role !== "student") return res.status(403).json({ message: "Only for students" });

  try {
    const studentSkills = req.user.skills;
    const internships = await Internship.find();

    // Filter internships by matching skills
    const matched = internships.filter(internship =>
      internship.skillsRequired.some(skill => studentSkills.includes(skill))
    );

    res.json(matched);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
