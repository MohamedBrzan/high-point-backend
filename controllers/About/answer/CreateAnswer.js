const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id } = req.params;
  const { text, text_ar } = req.body;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  about = await About.findByIdAndUpdate(
    about_id,
    {
      $push: {
        'q_a.answers': {
          text,
          text_ar,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(about.q_a.answers);
});
