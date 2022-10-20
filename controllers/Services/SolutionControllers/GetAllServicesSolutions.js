const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ServiceSolution = require('../../../models/Service/Service_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  let serviceSolution = await ServiceSolution.find();

  return res.json(serviceSolution);
});
