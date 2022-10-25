const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_schema_id } = req.params;

  let solutionSchema = await SolutionSchema.findById(solution_schema_id);

  if (!solutionSchema)
    return next(new ErrorHandler(req.t('solution_schema_error'), 404));

  solutionSchema = await SolutionSchema.findByIdAndUpdate(
    solution_schema_id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(solutionSchema);
});
