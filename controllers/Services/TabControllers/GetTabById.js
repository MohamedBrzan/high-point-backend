const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Service/Service_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id } = req.body;

  const tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(`${req.t('tab_error')}`, 404));

  return res.json(tab);
});
