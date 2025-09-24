const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  internship: { type: mongoose.Schema.Types.ObjectId, ref: "Internship", required: true },
  status: { type: String, enum: ["applied", "accepted", "rejected"], default: "applied" },
}, { timestamps: true });

module.exports = mongoose.model("Application", applicationSchema);
