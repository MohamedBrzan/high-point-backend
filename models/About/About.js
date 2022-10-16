const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    title_ar: { type: String, required: true },
    description: { type: String, required: true },
    description_ar: { type: String, required: true },
    missions: [
      {
        mission_title: { type: String, required: true },
        mission_title_ar: { type: String, required: true },
        mission_description: { type: String, required: true },
        mission_description_ar: { type: String, required: true },
      },
    ],
    q_a: {
      q_a_title: { type: String, required: true },
      q_a_title_ar: { type: String, required: true },
      answers: [
        {
          text: { type: String, required: true },
          text_ar: { type: String, required: true },
        },
      ],
    },
    team: {
      team_title: { type: String, required: true },
      team_title_ar: { type: String, required: true },
      crew: [
        {
          image: { type: String, required: true },
          name: { type: String, required: true },
          name_ar: { type: String, required: true },
          job_title: { type: String, required: true },
          job_title_ar: { type: String, required: true },
          bio: { type: String, required: true },
          bio_ar: { type: String, required: true },
        },
      ],
    },
    head_image: { type: String, required: true },
    footer_image: { type: String, required: true },
    footer_text: { type: String, required: true },
    footer_text_ar: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('About', AboutSchema);
