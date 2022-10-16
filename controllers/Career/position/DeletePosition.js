const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Career = require('../../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const { career_id, position_id } = req.body;

  let career = await Career.findById(career_id);

  if (!career)
    return next(new ErrorHandler(`${req.t('career_schema_error')}`, 404));

  const findPosition = career.position.find(
    (position) => position._id.toString() === position_id
  );

  if (!findPosition)
    return next(new ErrorHandler(`${req.t('position_error')}`, 404));

  career = await Career.findByIdAndUpdate(
    career_id,
    {
      $pull: {
        position: findPosition,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json({ message: `${req.t('position_deleted')}` });
});
