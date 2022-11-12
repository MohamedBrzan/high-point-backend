const AsyncHandler = require('../../middleWare/AsyncHandler');
const PrivacyAndCookies = require('../../models/PrivacyAndCookies/PrivacyAndCookies');

module.exports = AsyncHandler(async (req, res, next) => {
  let privacyAndCookies = await PrivacyAndCookies.find();

  return res.json(privacyAndCookies);
});
