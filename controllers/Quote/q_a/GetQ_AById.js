const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, q_a_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(quote_id)) return false;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const findQ_A = quote.q_a.find((q_a) => q_a._id.toString() === q_a_id);

  if (!findQ_A) return next(new ErrorHandler(`${req.t('q_a_error')}`, 404));

  return res.json(findQ_A);
});
