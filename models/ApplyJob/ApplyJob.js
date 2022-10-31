const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isInt = require('validator/lib/isInt');

const ApplyJobSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Apply_Job', ApplyJobSchema);
