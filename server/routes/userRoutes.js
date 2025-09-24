const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Middleware: Protect routes
const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized" });
    }
  } else {
    return res.status(401).json({ message: "No token" });
  }
};

// @route GET /api/users/profile
router.get("/profile", protect, async (req, res) => {
  res.json(req.user);
});

// @route PUT /api/users/profile
router.put("/profile", protect, async (req, res) => {
  const user = req.user;
  const { skills, education } = req.body;
  if (skills) user.skills = skills;
  if (education) user.education = education;
  await user.save();
  res.json(user);
});

module.exports = router;
