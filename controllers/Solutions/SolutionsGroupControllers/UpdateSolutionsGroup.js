const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const SolutionsGroup = require('../../../models/Solution/Solution_Solutions_Group');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solutions_group_id } = req.body;

  let solutionsGroup = await SolutionsGroup.findById(solutions_group_id);

  if (!solutionsGroup)
    return next(new ErrorHandler(`${req.t('solutions_group_error')}`, 404));

  solutionsGroup = await SolutionsGroup.findByIdAndUpdate(
    solutions_group_id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(solutionsGroup);
});
