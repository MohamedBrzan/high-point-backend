const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');

const ContactUsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    head_office: {
      location: { type: String, required: true },
      location_ar: { type: String, required: true },
      address: { type: String, required: true },
      address_ar: { type: String, required: true },
    },
    work_inquiries: {
      question: { type: String, required: true },
      question_ar: { type: String, required: true },
      company_email: { type: String, required: true, validate: isEmail },
    },
    branches: [
      {
        type: String,
      },
    ],
    branches_ar: [
      {
        type: String,
      },
    ],
    phone: {
      tel: { type: Number, required: true },
      fax: { type: Number, required: true },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact_Us', ContactUsSchema);
