const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Service/Service_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id } = req.params;

  let solution = await Solution.findById(solution_id);

  if (!solution) return next(new ErrorHandler(req.t('solution_error'), 404));

  return res.json(solution);
});
