const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const About = require('../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id } = req.params;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  about = await About.findByIdAndUpdate(about_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(about);
});
