const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  stipend: { type: String },
  duration: { type: String },
  skillsRequired: [{ type: String }],
  type: { type: String, enum: ["normal", "micro"], default: "normal" },
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
}, { timestamps: true });

module.exports = mongoose.model("Internship", internshipSchema);
