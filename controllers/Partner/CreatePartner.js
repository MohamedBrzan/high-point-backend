const AsyncHandler = require('../../middleWare/AsyncHandler');
const Partner = require('../../models/Partner/Partner');

module.exports = AsyncHandler(async (req, res, next) => {
  const { name, name_ar, image, country, country_ar } = req.body;

  const partner = await Partner.create({
    name,
    name_ar,
    image,
    country,
    country_ar,
  });

  return res.json(partner);
});
