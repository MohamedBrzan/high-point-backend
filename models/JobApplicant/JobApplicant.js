const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isInt = require('validator/lib/isInt');

const JobApplicantSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },

    sub_title: { type: String, required: true },
    sub_title_ar: { type: String, required: true },

    name: { type: String, required: true },

    email: {
      type: String,
      required: true,
      validate: function () {
        return isEmail;
      },
    },

    phone: {
      type: String,
      required: true,
      validate: function () {
        return isInt;
      },
    },

    file: { type: String, required: true },

    rule: { type: String, required: true },
    rule_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Job_Applicant', JobApplicantSchema);
