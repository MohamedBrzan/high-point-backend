const mongoose = require('mongoose');

const CareerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    name_ar: { type: String, required: true },

    head_text: { type: String, required: true },
    head_text_ar: { type: String, required: true },

    build_brief: [
      {
        title: { type: String, required: true },
        description_one: { type: String, required: true },
        description_two: { type: String, required: true },
      },
    ],

    app_brief: [
      {
        title: { type: String, required: true },
        description: { type: String, required: true },
      },
    ],

    position: [
      {
        title: { type: String, required: true },
        sub_title: { type: String, required: true },
        description: { type: String, required: true },
        content: { type: String, required: true },
      },
    ],

    location_info: {
      title: { type: String, required: true },
      description: { type: String, required: true },
      image: { type: String, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Career', CareerSchema);
