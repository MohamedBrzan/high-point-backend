const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const About = require('../../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  const { about_id, mission_id } = req.params;

  let about = await About.findById(about_id);

  if (!about)
    return next(new ErrorHandler(`${req.t('about_schema_error')}`, 404));

  const findMission = about.missions.find(
    (mission) => mission._id.toString() === mission_id
  );

  if (!findMission)
    return next(new ErrorHandler(`${req.t('mission_error')}`, 404));

  about = await About.findByIdAndUpdate(
    about_id,
    {
      $pull: {
        missions: findMission,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json({ message: `${req.t('mission_deleted')}` });
});
