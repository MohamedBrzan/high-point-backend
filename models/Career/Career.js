const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    name_ar: { type: String, required: true },

    head_text: {
      first_text: { type: String, required: true },
      middle_text: { type: String, required: true },
      last_text: { type: String, required: true },
    },

    head_text_ar: {
      first_text_ar: { type: String, required: true },
      middle_text_ar: { type: String, required: true },
      last_text_ar: { type: String, required: true },
    },

    brief: [
      {
        title: { type: String, required: true },
        title_ar: { type: String, required: true },
        description_one: { type: String, required: true },
        description_one_ar: { type: String, required: true },
        description_two: { type: String },
        description_two_ar: { type: String },
      },
    ],

    position: [
      {
        title: { type: String, required: true },
        title_ar: { type: String, required: true },
        sub_title: { type: String, required: true },
        sub_title_ar: { type: String, required: true },
        description: { type: String, required: true },
        description_ar: { type: String, required: true },
        content: { type: String, required: true },
        content_ar: { type: String, required: true },
      },
    ],

    location_info: {
      title: { type: String, required: true },
      title_ar: { type: String, required: true },
      description: { type: String, required: true },
      description_ar: { type: String, required: true },
      image: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Career', CareerSchema);
