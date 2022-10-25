const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const SolutionTabs = require('../../../models/Solution/Solution_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const solutionTabs = await SolutionTabs.find().populate('solutions');

  if (!solutionTabs) return next(new ErrorHandler(req.t('tab_error'), 404));

  return res.json(solutionTabs);
});
