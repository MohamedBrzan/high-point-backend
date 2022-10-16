const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_schema_id, mission_id } = req.body;

  let about = await About.findById(about_schema_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findMission = about.missions.find(
    (mission) => mission._id.toString() === mission_id
  );

  if (!findMission)
    return next(new ErrorHandler(`${req.t('mission_error')}`, 404));

  return res.json(findMission);
});
