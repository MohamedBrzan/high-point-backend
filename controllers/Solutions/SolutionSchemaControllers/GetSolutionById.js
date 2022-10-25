const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_schema_id } = req.params;

  const solutionSchema = await SolutionSchema.findById(solution_schema_id);

  if (!solutionSchema)
    return next(new ErrorHandler(req.t('solution_schema_error'), 404));

  return res.json(solutionSchema);
});
