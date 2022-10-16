const mongoose = require('mongoose');

const SubjectPointsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    points: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service_Subject_Points', SubjectPointsSchema);
