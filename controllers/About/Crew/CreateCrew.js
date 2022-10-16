const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    about_schema_id,
    image,
    name,
    name_ar,
    job_title,
    job_title_ar,
    bio,
    bio_ar,
  } = req.body;

  let about = await About.findById(about_schema_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));


  about = await About.findByIdAndUpdate(
    about_schema_id,
    {
      $push: {
        'team.crew': {
          image,
          name,
          name_ar,
          job_title,
          job_title_ar,
          bio,
          bio_ar,
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
