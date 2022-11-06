const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');

const InterfaceSchema = new mongoose.Schema(
  {
    head_text: {
      first_text: { type: String, required: true },
      middle_text: { type: String, required: true },
      last_text: { type: String, required: true },
    },
    head_text_ar: {
      first_text_ar: { type: String, required: true },
      middle_text_ar: { type: String, required: true },
      last_text_ar: { type: String, required: true },
    },
    about: {
      name: { type: String, required: true },
      name_ar: { type: String, required: true },
      title: { type: String, required: true },
      title_ar: { type: String, required: true },
      description_one: {
        marked_text: { type: String, required: true },
        normal_text: { type: String, required: true },
      },
      description_one_ar: {
        marked_text_ar: { type: String, required: true },
        normal_text_ar: { type: String, required: true },
      },
      description_two: {
        marked_text: { type: String, required: true },
        normal_text: { type: String, required: true },
      },
      description_two_ar: {
        marked_text_ar: { type: String, required: true },
        normal_text_ar: { type: String, required: true },
      },
      developments: [
        {
          field: { type: String, required: true },
          field_ar: { type: String, required: true },
          progress: { type: Number, required: true },
        },
      ],
    },
    proofs: {
      name: { type: String, required: true },
      name_ar: { type: String, required: true },
      title: {
        first_text: { type: String, required: true },
        last_text: { type: String, required: true },
      },
      title_ar: {
        first_text_ar: { type: String, required: true },
        last_text_ar: { type: String, required: true },
      },
      description: { type: String, required: true },
      description_ar: { type: String, required: true },
      proof: [
        {
          image: { type: String, required: true },
          explain: { type: String, required: true },
        },
      ],
    },
    partner: {
      name: { type: String, required: true },
      name_ar: { type: String, required: true },
      title: {
        first_text: { type: String, required: true },
        last_text: { type: String, required: true },
      },
      title_ar: {
        first_text_ar: { type: String, required: true },
        last_text_ar: { type: String, required: true },
      },
      description: { type: String, required: true },
      description_ar: { type: String, required: true },
      image: { type: String, required: true },
    },
    solutions: {
      title_text: {
        first_text: { type: String, required: true },
        second_text: { type: String },
        third_text: { type: String },
        last_text: { type: String },
      },
      title_text_ar: {
        first_text_ar: { type: String, required: true },
        second_text_ar: { type: String },
        third_text_ar: { type: String },
        last_text_ar: { type: String },
      },
      sub_title_text: {
        first_text: { type: String, required: true },
        second_text: { type: String },
        third_text: { type: String },
        last_text: { type: String },
      },
      sub_title_text_ar: {
        first_text_ar: { type: String, required: true },
        second_text_ar: { type: String },
        third_text_ar: { type: String },
        last_text_ar: { type: String },
      },
      footer_text: {
        first_text: { type: String, required: true },
        second_text: { type: String },
        third_text: { type: String },
        last_text: { type: String },
      },
      footer_text_ar: {
        first_text_ar: { type: String, required: true },
        second_text_ar: { type: String },
        third_text_ar: { type: String },
        last_text_ar: { type: String },
      },
      image: { type: String },
      video: { type: String },
      solution: [
        {
          title: { type: String, required: true },
          title_ar: { type: String, required: true },
          description: { type: String, required: true },
          description_ar: { type: String, required: true },
          solution_image: { type: String, required: true },
          anime_image: { type: String, required: true },
        },
      ],
    },
    footer: {
      logo_text_white: { type: String, required: true },
      logo_text_colored: { type: String, required: true },
      vertical_logo: { type: String, required: true },
      horizontal_logo: { type: String, required: true },
      logo_img: { type: String, required: true },
      text: { type: String, required: true },
      text_ar: { type: String, required: true },
      brief: { type: String, required: true },
      brief_ar: { type: String, required: true },
      btn_one: { type: String, required: true },
      btn_one_ar: { type: String, required: true },
      btn_two: { type: String, required: true },
      btn_two_ar: { type: String, required: true },
    },
    social_links: [
      {
        name: { type: String, required: true },
        name_ar: { type: String, required: true },
        url: {
          type: String,
          required: true,
          validate: {
            validator: isURL,
            message: '{VALUE} This is Not a valid URL',
          },
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Interface', InterfaceSchema);
