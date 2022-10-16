const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const sendToken = require('../../utils/sendToken');

module.exports = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select('+password');

  if (!user) return next(new ErrorHandler(`${req.t('login_error')}`, 404));

  const isMatch = await user.isValidPassword(password);

  if (!isMatch) return next(new ErrorHandler(`${req.t('login_error')}`, 404));

  return sendToken(res, user, 200);
});
