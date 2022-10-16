const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Subject = require('../../../models/Solution/Solution_Subject');

module.exports = AsyncHandler(async (req, res, next) => {
  const { subject_id } = req.body;

  const subject = await Subject.findById(subject_id);

  if (!subject) return next(new ErrorHandler(`${req.t('subject_error')}`, 404));

  return res.json(subject);
});
