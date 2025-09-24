const User = require("../models/User");

exports.getProfile = async (req, res) => {
  res.json(req.user);
};

exports.updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.skills = req.body.skills || user.skills;
    user.education = req.body.education || user.education;
    user.resume = req.body.resume || user.resume;
    user.companyName = req.body.companyName || user.companyName;

    const updatedUser = await user.save();
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
