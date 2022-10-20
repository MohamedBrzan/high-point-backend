const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Service/Service_Card');
const Tab = require('../../../models/Service/Service_Tab');

module.exports = AsyncHandler(async (req, res, next) => {
  const { card_id, title, title_ar } = req.body;

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(req.t('card_error'), 404));

  const tab = await Tab.create({ title, title_ar });

  card = await Card.findByIdAndUpdate(
    card_id,
    {
      $push: {
        tabs: tab._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(tab);
});
