const AsyncHandler = require('../../middleWare/AsyncHandler');
const PrivacyAndCookies = require('../../models/PrivacyAndCookies/PrivacyAndCookies');

module.exports = AsyncHandler(async (req, res, next) => {
  const { privacyAndCookies_id } = req.params;

  let privacyAndCookies = await PrivacyAndCookies.findById(
    privacyAndCookies_id
  );

  if (!privacyAndCookies)
    return next(new ErrorHandler(req.t('privacy_cookies_error'), 404));

  privacyAndCookies = await PrivacyAndCookies.findByIdAndUpdate(
    privacyAndCookies_id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(privacyAndCookies);
});
