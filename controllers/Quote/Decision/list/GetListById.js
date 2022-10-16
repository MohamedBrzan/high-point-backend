const AsyncHandler = require('../../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../../middleWare/ErrorHandler');
const Quote = require('../../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, decision_id, list_id } = req.body;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const findDecision = quote.decisions.find(
    (decision) => decision._id.toString() === decision_id
  );

  if (!findDecision)
    return next(new ErrorHandler(`${req.t('decision_error')}`, 404));

  const findList = findDecision.list.find(
    (list) => list._id.toString() === list_id
  );

  if (!findList) return next(new ErrorHandler(`${req.t('list_error')}`, 404));

  return res.json(findList);
});
