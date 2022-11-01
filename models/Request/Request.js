const mongoose = require('mongoose');
const isEmail = require('validator/lib/isEmail');
const isInt = require('validator/lib/isInt');

const RequestSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Request', RequestSchema);
