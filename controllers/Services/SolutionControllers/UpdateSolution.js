const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Service/Service_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id } = req.body;

  let solution = await Solution.findById(solution_id);

  if (!solution) return next(new ErrorHandler(`${req.t('solution_error')}`, 404));

  solution = await Solution.findByIdAndUpdate(solution_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(solution);
});
