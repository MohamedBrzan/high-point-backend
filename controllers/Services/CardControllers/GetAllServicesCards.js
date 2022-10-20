const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ServicesCards = require('../../../models/Service/Service_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const servicesCards = await ServicesCards.find().populate({
    path: 'tabs',
    populate: [
      {
        path: 'solutions',
      },
    ],
  });

  return res.json(servicesCards);
});
