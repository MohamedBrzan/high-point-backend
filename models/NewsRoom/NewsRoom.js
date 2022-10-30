const mongoose = require('mongoose');

const NewsRoomSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    images: [{ type: String, required: true }],
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    sub_description: { type: String, required: true },
    sub_description_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('NewsRoom', NewsRoomSchema);
