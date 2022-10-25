const AsyncHandler = require('../../../middleWare/AsyncHandler');
const SolutionSolution = require('../../../models/Solution/Solution_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  let solutionSolution = await SolutionSolution.find();

  return res.json(solutionSolution);
});
