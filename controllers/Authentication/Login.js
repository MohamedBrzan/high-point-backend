const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const SendToken = require('../../utils/SendToken');

module.exports = AsyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email }).select('+password');

  if (!user) return next(new ErrorHandler(`${req.t('login_error')}`, 404));

  const isMatch = await user.isValidPassword(password);

  if (!isMatch) return next(new ErrorHandler(`${req.t('login_error')}`, 404));

  if (user.isAdmin === true) {
    user = await User.findOne({ email }).select('-_id avatar name isAdmin');
  } else {
    user = await User.findOne({ email }).select('-_id avatar name');
  }

  return SendToken(res, user, 200);
});
