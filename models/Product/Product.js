const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    sub_title: { type: String, required: true },
    sub_title_ar: { type: String, required: true },
    header_text: { type: String, required: true },
    header_text_ar: { type: String, required: true },
    desc_text_one: { type: String, required: true },
    desc_text_ar_one: { type: String, required: true },
    desc_text_two: { type: String, required: true },
    desc_text_ar_two: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },

    items: [
      {
        item_title: { type: String, required: true },
        item_title_ar: { type: String, required: true },
        item_desc: { type: String, required: true },
        item_desc_ar: { type: String, required: true },
      },
    ],

    video: { type: String, required: true },

    footer_text: { type: String, required: true },
    footer_text_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', ProductSchema);
