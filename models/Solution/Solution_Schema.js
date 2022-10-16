const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    sub_title: { type: String, required: true },
    sub_title_ar: { type: String, required: true },
    header_text: { type: String, required: true },
    header_text_ar: { type: String, required: true },
    intro_text: { type: String, required: true },
    intro_text_ar: { type: String, required: true },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
      },
    ],
    footer_text: { type: String, required: true },
    footer_text_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Solution_Schema', SolutionSchema);
