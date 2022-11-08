const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Solution/Solution_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(solution_id)) return false;

  let solution = await Solution.findById(solution_id);

  if (!solution) return next(new ErrorHandler(req.t('solution_error'), 404));

  return res.json(solution);
});
