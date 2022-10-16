const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, name, name_ar, item, item_ar } = req.body;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const decisions = {
    name,
    name_ar,
    list: { item, item_ar },
  };

  quote = await Quote.findByIdAndUpdate(
    quote_id,
    {
      $push: {
        decisions,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(quote);
});
