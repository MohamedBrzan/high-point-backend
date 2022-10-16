const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Service/Service_Card');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const { service_schema_id, card_id } = req.body;

  let serviceSchema = await ServiceSchema.findById(service_schema_id);

  if (!serviceSchema)
    return next(new ErrorHandler(`${req.t('service_schema_error')}`, 404));

  let card = await Card.findById(card_id);

  if (!card) return next(new ErrorHandler(`${req.t('card_error')}`, 404));

  serviceSchema = await ServiceSchema.findByIdAndUpdate(
    service_schema_id,
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
