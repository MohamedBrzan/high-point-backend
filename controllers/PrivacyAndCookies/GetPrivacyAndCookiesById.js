const AsyncHandler = require('../../middleWare/AsyncHandler');
const PrivacyAndCookies = require('../../models/PrivacyAndCookies/PrivacyAndCookies');

module.exports = AsyncHandler(async (req, res, next) => {
  const { privacyAndCookies_id } = req.params;

  const privacyAndCookies = await PrivacyAndCookies.findById(
    privacyAndCookies_id
  );

  if (!privacyAndCookies)
    return next(new ErrorHandler(req.t('privacy_cookies_error'), 404));

  return res.json(privacyAndCookies);
});
