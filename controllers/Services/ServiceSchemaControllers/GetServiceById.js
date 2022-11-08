const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { service_schema_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(service_schema_id)) return false;

  const serviceSchema = await ServiceSchema.findById(service_schema_id);

  if (!serviceSchema)
    return next(new ErrorHandler(req.t('service_schema_error'), 404));

  return res.json(serviceSchema);
});
