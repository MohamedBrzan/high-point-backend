const mongoose = require('mongoose');

const PrivacyAndCookiesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('PrivacyAndCookies', PrivacyAndCookiesSchema);
