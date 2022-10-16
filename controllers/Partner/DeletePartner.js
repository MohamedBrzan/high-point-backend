const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Partner = require('../../models/Partner/Partner');

module.exports = AsyncHandler(async (req, res, next) => {
  const { partner_schema_id } = req.body;

  let partner = await Partner.findById(partner_schema_id);

  if (!partner)
    return next(new ErrorHandler(`${req.t('partner_schema_error')}`, 404));

  partner = await Partner.findByIdAndRemove(partner_schema_id);

  return res.json({ message: `${req.t('partner_schema_deleted')}` });
});
