const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, brief_id } = req.params;
  const {
    title,
    title_ar,
    description_one,
    description_one_ar,
    description_two,
    description_two_ar,
  } = req.body;

  let career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  const findBrief = career.brief.find(
    (brief) => brief._id.toString() === brief_id
  );

  if (!findBrief) return next(new ErrorHandler(req.t('brief_error'), 404));

  findBrief.title = title;
  findBrief.title_ar = title_ar;
  findBrief.description_one = description_one;
  findBrief.description_one_ar = description_one_ar;
  findBrief.description_two = description_two;
  findBrief.description_two_ar = description_two_ar;

  await career.save();

  return res.json(findBrief);
});
