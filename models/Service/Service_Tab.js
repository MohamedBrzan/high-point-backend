const mongoose = require('mongoose');

const TabSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service_Subject',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Service_Tab', TabSchema);
