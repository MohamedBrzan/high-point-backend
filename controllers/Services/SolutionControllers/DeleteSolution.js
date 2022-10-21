const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Service/Service_Tab');
const Solution = require('../../../models/Service/Service_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id, solution_id } = req.params;

  let tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(req.t('tab_error'), 404));

  let solution = await Solution.findById(solution_id);

  if (!solution) return next(new ErrorHandler(req.t('solution_error'), 404));

  tab = await Tab.findByIdAndUpdate(
    tab_id,
    {
      $pull: {
        solutions: solution._id,
      },
    },
    { new: true, runValidators: true }
  );

  solution = await Solution.findByIdAndRemove(solution_id);

  return res.json({ message: req.t('solution_deleted') });
});
