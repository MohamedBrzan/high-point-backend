const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Quote = require('../../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const { quote_id, question, answer } = req.body;

  let quote = await Quote.findById(quote_id);

  if (!quote)
    return next(new ErrorHandler(`${req.t('quote_schema_error')}`, 404));

  const q_a = {
    question,
    answer,
  };

  quote = await Quote.findByIdAndUpdate(
    quote_id,
    {
      $push: {
        q_a,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(quote);
});
