const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Subject = require('../../../models/Service/Service_Subject');

module.exports = AsyncHandler(async (req, res, next) => {
  const { subject_id } = req.body;

  let subject = await Subject.findById(subject_id);

  if (!subject) return next(new ErrorHandler(`${req.t('subject_error')}`, 404));

  subject = await Subject.findByIdAndUpdate(subject_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(subject);
});
