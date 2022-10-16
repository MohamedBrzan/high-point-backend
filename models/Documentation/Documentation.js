const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const DocumentationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    name_ar: { type: String, required: true },
    document: [
      {
        tab_title: { type: String, required: true },
        tab_title_ar: { type: String, required: true },
        desc_title: { type: String, required: true },
        desc_title_ar: { type: String, required: true },
        description: { type: String, required: true },
        description_ar: { type: String, required: true },
      },
    ],
    footer_text: { type: String, required: true },
    footer_text_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Documentation', DocumentationSchema);
