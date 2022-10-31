const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, answer_id } = req.params;
  const { text, text_ar } = req.body;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findAnswer = about.q_a.answers.find(
    (answer) => answer._id.toString() === answer_id
  );

  if (!findAnswer)
    return next(new ErrorHandler(`${req.t('answer_error')}`, 404));

  findAnswer.text = text;
  findAnswer.text_ar = text_ar;

  await about.save();

  return res.json(about);
});
