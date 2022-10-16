const mongoose = require('mongoose');

const SolutionsGroupSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    solutions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solution',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Solution_Solutions_Group', SolutionsGroupSchema);
