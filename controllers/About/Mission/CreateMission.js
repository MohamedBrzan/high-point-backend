const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    about_schema_id,
    mission_title,
    mission_title_ar,
    mission_description,
    mission_description_ar,
  } = req.body;

  let about = await About.findById(about_schema_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  about = await About.findByIdAndUpdate(
    about_schema_id,
    {
      $push: {
        missions: {
          mission_title,
          mission_title_ar,
          mission_description,
          mission_description_ar,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(about);
});
