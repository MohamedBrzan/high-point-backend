const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, decision_id, name, name_ar } = req.body;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const findDecision = quote.decisions.find(
    (decision) => decision._id.toString() === decision_id
  );

  if (!findDecision)
    return next(new ErrorHandler(`${req.t('decision_error')}`, 404));

  findDecision.name = name;
  findDecision.name_ar = name_ar;

  await quote.save();

  return res.json(quote);
});
