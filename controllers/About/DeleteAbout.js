const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const About = require('../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_schema_id } = req.body;

  let about = await About.findById(about_schema_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  about = await About.findByIdAndRemove(about_schema_id);

  return res.json({ message: `${req.t('about_schema_deleted')}` });
});
