const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');
const Tab = require('../../../models/Solution/Solution_Tab');
const Solution = require('../../../models/Solution/Solution_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id } = req.params;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(req.t('card_error'), 404));

  const allTabs = [];

  allTabs.push(...card.tabs);

  if (card.tabs.length > 0) {
    for (let i = 0; i < allTabs.length; i++) {
      const tabs = allTabs[i].toString();
      const findTab = await Tab.findById(tabs).populate({
        path: 'solutions',
        select: '_id',
      });
      if (findTab.solutions.length > 0) {
        for (let z = 0; z < findTab.solutions.length; z++) {
          const solutions = findTab.solutions[z]._id.toString();

          await Solution.deleteMany({ _id: solutions });
        }
      }

      await Tab.deleteMany({ _id: tabs });
    }
  }

  card = await Card.findByIdAndRemove(card_id);
  return res.json({ message: req.t('card_deleted') });
});
