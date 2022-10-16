const mongoose = require('mongoose');

const SolutionsGroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    solutions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service_Solution',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service_Solutions_Group', SolutionsGroupSchema);
