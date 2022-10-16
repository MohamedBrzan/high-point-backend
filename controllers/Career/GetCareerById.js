const AsyncHandler = require('../../middleWare/AsyncHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id } = req.body;

  const career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  return res.json(career);
});
