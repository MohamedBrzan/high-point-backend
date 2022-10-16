const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Solution_Subject', SubjectSchema);
