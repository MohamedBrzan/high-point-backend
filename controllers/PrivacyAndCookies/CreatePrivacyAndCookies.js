const AsyncHandler = require('../../middleWare/AsyncHandler');
const PrivacyAndCookies = require('../../models/PrivacyAndCookies/PrivacyAndCookies');

module.exports = AsyncHandler(async (req, res, next) => {
  const { title, title_ar, description, description_ar } = req.body;

  const privacyAndCookies = await PrivacyAndCookies.create({
    title,
    title_ar,
    description,
    description_ar,
  });

  return res.json(privacyAndCookies);
});
