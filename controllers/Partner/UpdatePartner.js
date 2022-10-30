const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Partner = require('../../models/Partner/Partner');

module.exports = AsyncHandler(async (req, res, next) => {
  const { partner_id } = req.params;

  let partner = await Partner.findById(partner_id);

  if (!partner)
    return next(new ErrorHandler(`${req.t('partner_schema_error')}`, 404));

  partner = await Partner.findByIdAndUpdate(partner_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(partner);
});
