const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    card_image: { type: String, required: true },
    view_image: { type: String, required: true },
    image_text: { type: String, required: true },
    image_text_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
    tabs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service_Tab',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service_Card', CardSchema);
