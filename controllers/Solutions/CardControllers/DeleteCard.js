const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { solution_schema_id, card_id } = req.body;

  let solutionSchema = await SolutionSchema.findById(solution_schema_id);

  if (!solutionSchema)
    return next(new ErrorHandler(`${req.t('solution_schema_error')}`, 404));

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(`${req.t('card_error')}`, 404));

  solutionSchema = await SolutionSchema.findByIdAndUpdate(
    solution_schema_id,
    {
      $pull: {
        cards: card_id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  card = await Card.findByIdAndRemove(card_id);

  return res.json({ message: `${req.t('card_deleted')}` });
});
