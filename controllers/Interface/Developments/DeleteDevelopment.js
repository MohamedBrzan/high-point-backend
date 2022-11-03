const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, development_id } = req.params;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findDevelopment = interface.about.developments.find(
    (development) => development._id.toString() === development_id
  );

  if (findDevelopment) {
    interface = await Interface.findByIdAndUpdate(
      interface_id,
      {
        $pull: {
          'about.developments': findDevelopment,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json({ message: req.t('development_deleted') });
  } else {
    return next(new ErrorHandler(req.t('development_error'), 404));
  }
});
