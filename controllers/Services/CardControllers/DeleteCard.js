const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Service/Service_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id } = req.params;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(req.t('card_error'), 404));

  card = await Card.findByIdAndRemove(card_id);

  return res.json({ message: req.t('card_deleted') });
});
