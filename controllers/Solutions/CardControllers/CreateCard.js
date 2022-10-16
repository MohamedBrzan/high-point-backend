const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    solution_schema_id,
    title,
    title_ar,
    image,
    description,
    description_ar,
  } = req.body;

  let solutionSchema = await SolutionSchema.findById(solution_schema_id);

  if (!solutionSchema)
    return next(new ErrorHandler(`${req.t('solution_schema_error')}`, 404));

  const card = await Card.create({
    title,
    title_ar,
    image,
    description,
    description_ar,
  });

  await SolutionSchema.findByIdAndUpdate(
    solution_schema_id,
    {
      $push: {
        cards: card,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(card);
});
