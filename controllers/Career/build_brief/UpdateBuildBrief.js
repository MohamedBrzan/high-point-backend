const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, build_brief_id, title, description_one, description_two } =
    req.body;

  let career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  const findBuildBrief = career.build_brief.find(
    (bb) => bb._id.toString() === build_brief_id
  );

  if (!findBuildBrief)
    return next(new ErrorHandler(`${req.t('build_brief_error')}`, 404));

  findBuildBrief.title = title;
  findBuildBrief.description_one = description_one;
  findBuildBrief.description_two = description_two;

  await career.save();

  return res.json(findBuildBrief);
});
