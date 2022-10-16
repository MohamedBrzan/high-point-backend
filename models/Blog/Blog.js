const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema(
  {
    // owner: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User',
    //   required: true,
    // },
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    sub_title: { type: String, required: true },
    sub_title_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
    sub_description: { type: String, required: true },
    sub_description_ar: { type: String, required: true },
    head_images: [{ type: String, required: true }],
    footer_images: [{ type: String, required: true }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', BlogSchema);
