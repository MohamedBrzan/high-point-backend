const mongoose = require('mongoose');

const TabSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    solutions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Solution_Solution',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Solution_Tab', TabSchema);
