const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Card = require('../../../models/Service/Service_Card');
const ServiceSchema = require('../../../models/Service/Service_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    service_schema_id,
    title,
    title_ar,
    image,
    description,
    description_ar,
  } = req.body;

  let serviceSchema = await ServiceSchema.findById(service_schema_id);

  if (!serviceSchema)
    return next(new ErrorHandler(`${req.t('service_schema_error')}`, 404));

  const card = await Card.create({
    title,
    title_ar,
    image,
    description,
    description_ar,
  });

  await ServiceSchema.findByIdAndUpdate(
    service_schema_id,
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
