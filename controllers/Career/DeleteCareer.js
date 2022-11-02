const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id } = req.params;

  let career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  career = await Career.findByIdAndRemove(career_id);

  return res.json({ message: req.t('career_schema_deleted') });
});
