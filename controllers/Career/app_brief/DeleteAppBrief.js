const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, app_brief_id } = req.body;

  let career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  const findAppBrief = career.app_brief.find(
    (bb) => bb._id.toString() === app_brief_id
  );

  if (!findAppBrief)
    return next(new ErrorHandler(`${req.t('app_brief_error')}`, 404));

  career.app_brief.pull(app_brief_id);

  await career.save();

  return res.json({ message: `${req.t('app_brief_deleted')}` });
});
