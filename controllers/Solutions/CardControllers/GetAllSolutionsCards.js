const AsyncHandler = require('../../../middleWare/AsyncHandler');
const SolutionsCards = require('../../../models/Solution/Solution_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const solutionsCards = await SolutionsCards.find().populate({
    path: 'tabs',
    populate: [
      {
        path: 'solutions',
      },
    ],
  });

  return res.json(solutionsCards);
});
