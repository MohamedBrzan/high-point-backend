const AsyncHandler = require('../../middleWare/AsyncHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { name, name_ar, head_text, head_text_ar } = req.body;

  const brief = {
    title: req.body.brief.title,
    description_one: req.body.brief.description_one,
    description_two: req.body.brief.description_two,
  };

  const position = {
    title: req.body.position.title,
    sub_title: req.body.position.sub_title,
    description: req.body.position.description,
    content: req.body.position.content,
  };

  const location_info = {
    title: req.body.location_info.title,
    description: req.body.location_info.title,
    image: req.body.location_info.title,
  };

  const career = await Career.create({
    name,
    name_ar,
    position,
    brief,
    location_info,
    head_text,
    head_text_ar,
  });

  return res.json(career);
});
