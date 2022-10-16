const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Solution/Solution_Solution');
const SolutionsGroup = require('../../../models/Solution/Solution_Solutions_Group');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solutions_group_id, solution_id } = req.body;

  let solutionsGroup = await SolutionsGroup.findById(solutions_group_id);

  if (!solutionsGroup)
    return next(new ErrorHandler(`${req.t('solutions_group_error')}`, 404));

  let solution = await Solution.findById(solution_id);

  if (!solution)
    return next(new ErrorHandler(`${req.t('solution_error')}`, 404));

  solutionsGroup = await SolutionsGroup.findByIdAndUpdate(
    solutions_group_id,
    {
      $pull: {
        solutions: solution._id,
      },
    },
    { new: true, runValidators: true }
  );

  solution = await Solution.findByIdAndRemove(solution_id);

  return res.json({ message: `${req.t('solution_deleted')}` });
});
