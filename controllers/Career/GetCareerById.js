const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(career_id)) return false;

  const career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  return res.json(career);
});
