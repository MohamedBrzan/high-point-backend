const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, development_id } = req.params;
  const { field, field_ar, progress } = req.body;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findDevelopment = interface.about.developments.find(
    (dev_field) => dev_field._id.toString() === development_id
  );

  if (findDevelopment) {
    findDevelopment.field = field;
    findDevelopment.field_ar = field_ar;
    findDevelopment.progress = progress;

    await interface.save();

    return res.json(findDevelopment);
  } else {
    return next(new ErrorHandler(req.t('development_error'), 404));
  }
});
