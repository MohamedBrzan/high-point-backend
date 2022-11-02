const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, brief_id } = req.params;

  let career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  const findBrief = career.brief.find(
    (brief) => brief._id.toString() === brief_id
  );

  if (!findBrief)
    return next(new ErrorHandler(req.t('brief_error'), 404));

  await Career.findByIdAndUpdate(
    career_id,
    {
      $pull: {
        brief: findBrief,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json({ message: req.t('brief_deleted') });
});
