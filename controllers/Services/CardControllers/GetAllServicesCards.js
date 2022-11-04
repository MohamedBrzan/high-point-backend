const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ServicesCards = require('../../../models/Service/Service_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const { length } = req.query;

  if (length) {
    const servicesCards = await ServicesCards.find()
      .populate({
        path: 'tabs',
        populate: [
          {
            path: 'solutions',
          },
        ],
      })
      .limit(parseInt(length));

    return res.json(servicesCards);
  } else {
    const servicesCards = await ServicesCards.find().populate({
      path: 'tabs',
      populate: [
        {
          path: 'solutions',
        },
      ],
    });

    return res.json(servicesCards);
  }
});
