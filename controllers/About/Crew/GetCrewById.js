const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, crew_id } = req.params;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findCrew = about.team.crew.find(
    (crew) => crew._id.toString() === crew_id
  );

  if (!findCrew) return next(new ErrorHandler(`${req.t('crew_error')}`, 404));

  return res.json(findCrew);
});
