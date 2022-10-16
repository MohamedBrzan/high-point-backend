const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema(
  {
    title: {
      first_title_text: { type: String, required: true },
      last_title_text: { type: String, required: true },
    },
    title_ar: {
      first_title_text_ar: { type: String, required: true },
      last_title_text_ar: { type: String, required: true },
    },
    sub_title: {
      first_sub_title_text: { type: String, required: true },
      last_sub_title_text: { type: String, required: true },
    },
    sub_title_ar: {
      first_sub_title_text_ar: { type: String, required: true },
      last_sub_title_text_ar: { type: String, required: true },
    },
    header_text: {
      first_text: { type: String, required: true },
      second_text: { type: String, required: true },
      third_text: { type: String, required: true },
      fourth_text: { type: String, required: true },
      fifth_text: { type: String, required: true },
      sixth_text: { type: String, required: true },
      seventh_text: { type: String, required: true },
    },
    header_text_ar: {
      first_text_ar: { type: String, required: true },
      second_text_ar: { type: String, required: true },
      third_text_ar: { type: String, required: true },
      fourth_text_ar: { type: String, required: true },
      fifth_text_ar: { type: String, required: true },
      sixth_text_ar: { type: String, required: true },
      seventh_text_ar: { type: String, required: true },
    },
    intro_text: { type: String, required: true },
    intro_text_ar: { type: String, required: true },
    cards: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service_Card',
      },
    ],
    footer_text: {
      first_footer_text: { type: String, required: true },
      last_footer_text: { type: String, required: true },
    },
    footer_text_ar: {
      first_footer_text_ar: { type: String, required: true },
      last_footer_text_ar: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service_Schema', ServiceSchema);
