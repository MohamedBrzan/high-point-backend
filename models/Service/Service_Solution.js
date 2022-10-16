const mongoose = require('mongoose');

const SolutionSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
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

module.exports = mongoose.model('Service_Solution', SolutionSchema);
