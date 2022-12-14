const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id } = req.params;
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    content,
    content_ar,
  } = req.body;

  let career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  career = await Career.findByIdAndUpdate(
    career_id,
    {
      $push: {
        position: {
          title,
          title_ar,
          sub_title,
          sub_title_ar,
          description,
          description_ar,
          content,
          content_ar,
        },
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(career.position);
});
