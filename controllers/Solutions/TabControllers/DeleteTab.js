const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Solution/Solution_Card');
const Tab = require('../../../models/Solution/Solution_Tab');
const Solution = require('../../../models/Solution/Solution_Solution');
const { default: mongoose } = require('mongoose');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id, tab_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(card_id))
    return next(new ErrorHandler(req.t('card_error'), 404));

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(req.t('card_error'), 404));

  if (!mongoose.Types.ObjectId.isValid(tab_id))
    return next(new ErrorHandler(req.t('tab_error'), 404));

  let tab = await Tab.findById(tab_id).populate({
    path: 'solutions',
    select: '_id',
  });

  if (!tab) return next(new ErrorHandler(req.t('tab_error'), 404));

  if (tab.solutions.length > 0) {
    for (let i = 0; i < tab.solutions.length; i++) {
      const solutions = tab.solutions[i]._id;

      await Solution.deleteMany({ _id: solutions });
    }
  }

  card = await Card.findByIdAndUpdate(
    card_id,
    {
      $pull: {
        tabs: tab._id,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  tab = await Tab.findByIdAndRemove(tab_id);

  return res.json({ message: req.t('tab_deleted') });
});
