const AsyncHandler = require('../../middleWare/AsyncHandler');
const Partner = require('../../models/Partner/Partner');

module.exports = AsyncHandler(async (req, res, next) => {
  const { country, continent } = req.query;

  if (country && !continent) {
    const regExp = new RegExp(country, 'gi');
    let partner = await Partner.find({
      $or: [{ country: regExp }, { country_ar: regExp }],
    });

    return res.json(partner);
  } else if (continent && !country) {
    const regExp = new RegExp(continent, 'gi');
    let partner = await Partner.find({
      $or: [{ continent: regExp }, { continent_ar: regExp }],
    });

    return res.json(partner);
  } else if (country && continent) {
    const countryRegExp = new RegExp(country, 'gi');
    const continentRegExp = new RegExp(continent, 'gi');
    let partner = await Partner.find({
      $or: [
        { country: countryRegExp },
        { country_ar: countryRegExp },
        { continent: continentRegExp },
        { continent_ar: continentRegExp },
      ],
    });
    return res.json(partner);
  } else {
    let partner = await Partner.find();

    return res.json(partner);
  }
});
