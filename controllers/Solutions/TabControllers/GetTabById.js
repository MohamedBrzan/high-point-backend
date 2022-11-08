const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Solution/Solution_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(tab_id)) return false;

  const tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(req.t('tab_error'), 404));

  return res.json(tab);
});
