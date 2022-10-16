const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Service/Service_Tab');
const Subject = require('../../../models/Service/Service_Subject');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id, title, title_ar, image, description, description_ar } =
    req.body;

  let tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(`${req.t('tab_error')}`, 404));

  const subject = await Subject.create({
    title,
    title_ar,
    image,
    description,
    description_ar,
  });

  tab = await Tab.findByIdAndUpdate(
    tab_id,
    {
      $push: {
        subjects: subject._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(tab);
});
