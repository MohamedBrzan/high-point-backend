const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, q_a_id } = req.params;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const findQ_A = quote.q_a.find((q_a) => q_a._id.toString() === q_a_id);

  if (!findQ_A) return next(new ErrorHandler(`${req.t('q_a_error')}`, 404));

  quote = await Quote.findByIdAndUpdate(quote_id, {
    $pull: {
      q_a: findQ_A,
    },
  });

  return res.json({ message: `${req.t('q_a_deleted')}` });
});
