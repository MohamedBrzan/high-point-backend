const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Interface = require('../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    first_text,
    middle_text,
    last_text,
    first_text_ar,
    middle_text_ar,
    last_text_ar,
    logo_text_white,
    logo_text_colored,
    vertical_logo,
    horizontal_logo,
    logo_img,
    text,
    text_ar,
    brief,
    brief_ar,
    btn_one,
    btn_one_ar,
    btn_two,
    btn_two_ar,
  } = req.body;

  const head_text = {
    first_text,
    middle_text,
    last_text,
  };
  const head_text_ar = {
    first_text_ar,
    middle_text_ar,
    last_text_ar,
  };
  const about = {
    name: req.body.about.name,
    name_ar: req.body.about.name_ar,
    title: req.body.about.title,
    title_ar: req.body.about.title_ar,
    description_one: {
      marked_text: req.body.about.description_one.marked_text,
      normal_text: req.body.about.description_one.normal_text,
    },
    description_one_ar: {
      marked_text_ar: req.body.about.description_one_ar.marked_text_ar,
      normal_text_ar: req.body.about.description_one_ar.normal_text_ar,
    },
    description_two: {
      marked_text: req.body.about.description_two.marked_text,
      normal_text: req.body.about.description_two.normal_text,
    },
    description_two_ar: {
      marked_text_ar: req.body.about.description_two_ar.marked_text_ar,
      normal_text_ar: req.body.about.description_two_ar.normal_text_ar,
    },
  };

  const proofs = {
    name: req.body.proofs.name,
    name_ar: req.body.proofs.name_ar,
    title: {
      first_text: req.body.proofs.title.first_text,
      last_text: req.body.proofs.title.last_text,
    },
    title_ar: {
      first_text_ar: req.body.proofs.title_ar.first_text_ar,
      last_text_ar: req.body.proofs.title_ar.last_text_ar,
    },

    description: req.body.proofs.description,
    description_ar: req.body.proofs.description_ar,
  };

  const partner = {
    name: req.body.partner.name,
    name_ar: req.body.partner.name_ar,
    title: {
      first_text: req.body.partner.title.first_text,
      last_text: req.body.partner.title.last_text,
    },
    title_ar: {
      first_text_ar: req.body.partner.title_ar.first_text_ar,
      last_text_ar: req.body.partner.title_ar.last_text_ar,
    },

    description: req.body.partner.description,
    description_ar: req.body.partner.description_ar,
    image: req.body.partner.image,
  };

  const solutions = {
    title_text: {
      first_text: req.body.solutions.title_text.first_text,
      second_text: req.body.solutions.title_text.second_text,
      third_text: req.body.solutions.title_text.third_text,
      last_text: req.body.solutions.title_text.last_text,
    },
    title_text_ar: {
      first_text_ar: req.body.solutions.title_text_ar.first_text_ar,
      second_text_ar: req.body.solutions.title_text_ar.second_text_ar,
      third_text_ar: req.body.solutions.title_text_ar.third_text_ar,
      last_text_ar: req.body.solutions.title_text_ar.last_text_ar,
    },
    sub_title_text: {
      first_text: req.body.solutions.sub_title_text.first_text,
      last_text: req.body.solutions.sub_title_text.last_text,
    },
    sub_title_text_ar: {
      first_text_ar: req.body.solutions.sub_title_text_ar.first_text_ar,
      last_text_ar: req.body.solutions.sub_title_text_ar.last_text_ar,
    },
    footer_text: {
      first_text: req.body.solutions.footer_text.first_text,
      second_text: req.body.solutions.footer_text.second_text,
      third_text: req.body.solutions.footer_text.third_text,
      last_text: req.body.solutions.footer_text.last_text,
    },
    footer_text_ar: {
      first_text_ar: req.body.solutions.footer_text_ar.first_text_ar,
      second_text_ar: req.body.solutions.footer_text_ar.second_text_ar,
      third_text_ar: req.body.solutions.footer_text_ar.third_text_ar,
      last_text_ar: req.body.solutions.footer_text_ar.last_text_ar,
    },
    image: req.body.solutions.image,
    video: req.body.solutions.video,
  };

  const footer = {
    logo_text_white,
    logo_text_colored,
    vertical_logo,
    horizontal_logo,
    logo_img,
    text,
    text_ar,
    brief,
    brief_ar,
    btn_one,
    btn_one_ar,
    btn_two,
    btn_two_ar,
  };

  const interface = await Interface.create({
    head_text,
    head_text_ar,
    about,
    proofs,
    partner,
    solutions,
    footer,
  });
  res.json(interface);
});
