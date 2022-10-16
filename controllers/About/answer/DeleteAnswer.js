const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_schema_id, answer_id } = req.body;

  let about = await About.findById(about_schema_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findAnswer = about.q_a.answers.find(
    (answer) => answer._id.toString() === answer_id
  );

  if (!findAnswer)
    return next(new ErrorHandler(`${req.t('answer_error')}`, 404));

  about = await About.findByIdAndUpdate(
    about_schema_id,
    {
      $pull: {
        'q_a.answers': findAnswer,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  return res.json({ message: `${req.t('answer_deleted')}` });
});
