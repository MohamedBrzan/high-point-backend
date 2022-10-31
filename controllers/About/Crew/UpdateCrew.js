const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, crew_id } = req.params;
  const { image, name, name_ar, job_title, job_title_ar, bio, bio_ar } =
    req.body;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findCrew = about.team.crew.find(
    (crew) => crew._id.toString() === crew_id
  );

  if (!findCrew) return next(new ErrorHandler(`${req.t('crew_error')}`, 404));

  findCrew.image = image;
  findCrew.name = name;
  findCrew.name_ar = name_ar;
  findCrew.job_title = job_title;
  findCrew.job_title_ar = job_title_ar;
  findCrew.bio = bio;
  findCrew.bio_ar = bio_ar;

  await about.save();

  return res.json(about.team.crew);
});
