const mongoose = require('mongoose');
const validator = require('validator');

const ClientMessageSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email',
      },
    },
    phone_or_whatsapp: { type: Number, required: true },
    company: { type: String, required: true },
    country: { type: String, required: true },
    number_of_network: { type: Number, required: true },
    network_traffic: { type: Number, required: true },
    network_type: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('ClientMessage', ClientMessageSchema);
