const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { service_schema_id } = req.params;

  let serviceSchema = await ServiceSchema.findById(service_schema_id);

  if (!serviceSchema)
    return next(new ErrorHandler(`${req.t('service_schema_error')}`, 404));

  serviceSchema = await ServiceSchema.findByIdAndUpdate(
    service_schema_id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(serviceSchema);
});
