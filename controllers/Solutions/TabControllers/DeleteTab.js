const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Solution/Solution_Solution');
const Tab = require('../../../models/Solution/Solution_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id, tab_id } = req.body;

  let solution = await Solution.findById(solution_id);

  if (!solution)
    return next(new ErrorHandler(`${req.t('solution_error')}`, 404));

  let tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(`${req.t('tab_error')}`, 404));

  solution = await Solution.findByIdAndUpdate(
    solution_id,
    {
      $pull: {
        tabs: tab_id,
      },
    },
    { new: true, runValidators: true }
  );

  tab = await Tab.findByIdAndRemove(tab_id);

  return res.json({ message: `${req.t('tab_deleted')}` });
});
