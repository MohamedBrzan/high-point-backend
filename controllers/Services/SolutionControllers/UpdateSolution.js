const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Service/Service_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id } = req.params;
  const { title, title_ar, image, description, description_ar } = req.body;

  // const image = req.file;

  let solution = await Solution.findById(solution_id);

  if (!solution) return next(new ErrorHandler(req.t('solution_error'), 404));

  solution = await Solution.findByIdAndUpdate(
    solution_id,
    { title, title_ar, image, description, description_ar },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(solution);
});
