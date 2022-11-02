const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, position_id } = req.params;
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    content,
    content_ar,
  } = req.body;

  let career = await Career.findById(career_id);

  if (!career) return next(new ErrorHandler(req.t('career_schema_error'), 404));

  const findPosition = career.position.find(
    (position) => position._id.toString() === position_id
  );

  if (!findPosition)
    return next(new ErrorHandler(req.t('position_error'), 404));

  findPosition.title = title;
  findPosition.title_ar = title_ar;
  findPosition.sub_title = sub_title;
  findPosition.sub_title_ar = sub_title_ar;
  findPosition.description = description;
  findPosition.description_ar = description_ar;
  findPosition.content = content;
  findPosition.content_ar = content_ar;

  await career.save();

  return res.json(findPosition);
});
