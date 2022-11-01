const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Quote = require('../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id } = req.params;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  quote = await Quote.findByIdAndUpdate(quote_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(quote);
});
