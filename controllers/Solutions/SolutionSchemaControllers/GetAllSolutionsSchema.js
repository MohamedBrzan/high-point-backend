const AsyncHandler = require('../../../middleWare/AsyncHandler');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const solutions = await SolutionSchema.find();

  return res.json(solutions);
});
