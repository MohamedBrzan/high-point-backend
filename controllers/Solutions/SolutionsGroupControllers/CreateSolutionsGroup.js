const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');
const SolutionsGroup = require('../../../models/Solution/Solution_Solutions_Group');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id, title, title_ar } = req.body;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(`${req.t('card_error')}`, 404));

  let solutionsGroup = await SolutionsGroup.create({ title, title_ar });

  card = await Card.findByIdAndUpdate(
    card_id,
    {
      $push: {
        solutions_group: solutionsGroup._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(solutionsGroup);
});
