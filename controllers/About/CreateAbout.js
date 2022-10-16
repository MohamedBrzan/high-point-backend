const AsyncHandler = require('../../middleWare/AsyncHandler');
const About = require('../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    description,
    description_ar,
    q_a_title,
    q_a_title_ar,
    team_title,
    team_title_ar,
    head_image,
    footer_image,
    footer_text,
    footer_text_ar,
  } = req.body;

  const q_a = {
    q_a_title,
    q_a_title_ar,
  };

  const team = {
    team_title,
    team_title_ar,
  };

  const about = await About.create({
    title,
    title_ar,
    description,
    description_ar,
    q_a,
    team,
    head_image,
    footer_image,
    footer_text,
    footer_text_ar,
  });

  return res.json(about);
});
