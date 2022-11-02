const AsyncHandler = require('../../middleWare/AsyncHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    name,
    name_ar,
    first_text,
    middle_text,
    last_text,
    first_text_ar,
    middle_text_ar,
    last_text_ar,
    title,
    title_ar,
    description,
    description_ar,
    image,
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

  const location_info = {
    title,
    title_ar,
    description,
    description_ar,
    image,
  };

  const career = await Career.create({
    name,
    name_ar,
    head_text,
    head_text_ar,
    location_info,
  });

  return res.json(career);
});
