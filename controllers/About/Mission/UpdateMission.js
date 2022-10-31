const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, mission_id } = req.params;
  const {
    mission_title,
    mission_title_ar,
    mission_description,
    mission_description_ar,
  } = req.body;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findMission = about.missions.find(
    (mission) => mission._id.toString() === mission_id
  );

  if (!findMission)
    return next(new ErrorHandler(`${req.t('mission_error')}`, 404));

  findMission.mission_title = mission_title;
  findMission.mission_title_ar = mission_title_ar;
  findMission.mission_description = mission_description;
  findMission.mission_description_ar = mission_description_ar;

  await about.save();

  return res.json(findMission);
});
