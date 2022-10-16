const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { service_schema_id } = req.params;
  const serviceSchema = await ServiceSchema.findById(service_schema_id);

  if (!serviceSchema)
    return next(new ErrorHandler(`${req.t('service_schema_error')}`, 404));

  await ServiceSchema.findByIdAndRemove(service_schema_id);

  return res.json({ message: `${req.t('service_schema_deleted')}` });
});
