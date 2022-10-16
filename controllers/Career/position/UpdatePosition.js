const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, position_id, title, sub_title, description, content } =
    req.body;

  let career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  const findPosition = career.position.find(
    (position) => position._id.toString() === position_id
  );

  if (!findPosition)
    return next(new ErrorHandler(`${req.t('position_error')}`, 404));

  findPosition.title = title;
  findPosition.sub_title = sub_title;
  findPosition.description = description;
  findPosition.content = content;

  await career.save();

  return res.json(findPosition);
});
