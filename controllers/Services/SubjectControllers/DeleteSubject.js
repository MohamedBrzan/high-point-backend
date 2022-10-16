const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Service/Service_Tab');
const Subject = require('../../../models/Service/Service_Subject');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id, subject_id } = req.body;

  let tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(`${req.t('tab_error')}`, 404));

  let subject = await Subject.findById(subject_id);

  if (!subject) return next(new ErrorHandler(`${req.t('subject_error')}`, 404));

  tab = await Tab.findByIdAndUpdate(
    tab_id,
    {
      $pull: {
        subjects: subject._id,
      },
    },
    { new: true, runValidators: true }
  );

  subject = await Subject.findByIdAndRemove(subject_id);

  return res.json({ message: `${req.t('subject_deleted')}` });
});
