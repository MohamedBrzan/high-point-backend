const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    name_ar: { type: String, required: true },
    image: { type: String, required: true },
    country: { type: String, required: true },
    country_ar: { type: String, required: true },
    continent: { type: String, required: true },
    continent_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Partner', PartnerSchema);
