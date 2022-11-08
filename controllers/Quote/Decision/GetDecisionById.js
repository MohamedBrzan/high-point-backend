const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, decision_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(quote_id)) return false;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const findDecision = quote.decisions.find(
    (decision) => decision._id.toString() === decision_id
  );

  if (!findDecision)
    return next(new ErrorHandler(`${req.t('decision_error')}`, 404));

  return res.json(findDecision);
});
