const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id } = req.params;
  const {
    title,
    title_ar,
    description_one,
    description_one_ar,
    description_two,
    description_two_ar,
  } = req.body;

  const career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  await Career.findByIdAndUpdate(
    career_id,
    {
      $push: {
        brief: {
          title,
          title_ar,
          description_one,
          description_one_ar,
          description_two,
          description_two_ar,
        },
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(career.brief);
});
