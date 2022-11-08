const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(card_id)) return false;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(req.t('card_error'), 404));

  return res.json(card);
});
