const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    sub_title: { type: String, required: true },
    sub_title_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },

    decisions: [
      {
        name: { type: String, required: true },
        name_ar: { type: String, required: true },
        list: [
          {
            item: { type: String, required: true },
            item_ar: { type: String, required: true },
          },
        ],
      },
    ],

    q_a: [
      {
        question: { type: String, required: true },
        answer: { type: String, required: true },
      },
    ],

    rule_text: { type: String, required: true },
    rule_text_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Quote', QuoteSchema);
