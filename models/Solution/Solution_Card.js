const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
    solutions_group: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SolutionsGroup',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Solution_Card', CardSchema);
