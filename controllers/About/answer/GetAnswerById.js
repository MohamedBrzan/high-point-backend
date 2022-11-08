const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, answer_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(about_id)) return false;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findAnswer = about.q_a.answers.find(
    (answer) => answer._id.toString() === answer_id
  );

  if (!findAnswer)
    return next(new ErrorHandler(`${req.t('answer_error')}`, 404));

  return res.json(findAnswer);
});
