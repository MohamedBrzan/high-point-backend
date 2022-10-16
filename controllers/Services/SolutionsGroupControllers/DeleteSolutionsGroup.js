const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Service/Service_Card');
const SolutionsGroup = require('../../../models/Service/Service_Solutions_Group');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id, solutions_group_id } = req.body;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(`${req.t('card_error')}`, 404));

  let solutionsGroup = await SolutionsGroup.findById(solutions_group_id);

  if (!solutionsGroup)
    return next(new ErrorHandler(`${req.t('solutions_group_error')}`, 404));

  solutionsGroup = await SolutionsGroup.findByIdAndRemove(solutions_group_id);

  card = await Card.findByIdAndUpdate(
    card_id,
    {
      $pull: {
        solutions_group: solutions_group_id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json({ message: `${req.t('solutions_group_deleted')}` });
});
