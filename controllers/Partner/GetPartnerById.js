const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Partner = require('../../models/Partner/Partner');

module.exports = AsyncHandler(async (req, res, next) => {
  const { partner_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(partner_id)) return false;

  let partner = await Partner.findById(partner_id);

  if (!partner)
    return next(new ErrorHandler(`${req.t('partner_schema_error')}`, 404));

  return res.json(partner);
});
