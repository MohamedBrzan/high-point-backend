const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Solution = require('../../../models/Service/Service_Solution');
const Tab = require('../../../models/Service/Service_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_id, title, title_ar } = req.body;

  let solution = await Solution.findById(solution_id);

  if (!solution)
    return next(new ErrorHandler(`${req.t('solution_error')}`, 404));

  const tab = await Tab.create({ title, title_ar });

  solution = await Solution.findByIdAndUpdate(
    solution_id,
    {
      $push: {
        tabs: tab._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(solution);
});
