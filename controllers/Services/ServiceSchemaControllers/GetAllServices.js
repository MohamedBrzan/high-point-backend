const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const services = await ServiceSchema.find();

  return res.json(services);
});
