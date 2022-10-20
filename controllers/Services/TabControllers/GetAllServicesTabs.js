const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const ServiceTabs = require('../../../models/Service/Service_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const serviceTabs = await ServiceTabs.find().populate('solutions');

  if (!serviceTabs) return next(new ErrorHandler(req.t('tab_error'), 404));

  return res.json(serviceTabs);
});
