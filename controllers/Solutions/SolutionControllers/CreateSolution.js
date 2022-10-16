const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Solution/Solution_Solution');
const SolutionsGroup = require('../../../models/Solution/Solution_Solutions_Group');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    solutions_group_id,
    image,
    image_text,
    image_text_ar,
    description,
    description_ar,
  } = req.body;

  let solutionsGroup = await SolutionsGroup.findById(solutions_group_id);

  if (!solutionsGroup)
    return next(new ErrorHandler(`${req.t('solutions_group_error')}`, 404));

  const solution = await Solution.create({
    image,
    image_text,
    image_text_ar,
    description,
    description_ar,
  });

  solutionsGroup = await SolutionsGroup.findByIdAndUpdate(
    solutions_group_id,
    {
      $push: {
        solutions: solution._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(solutionsGroup);
});
