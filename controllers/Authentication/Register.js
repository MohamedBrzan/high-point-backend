const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const SendToken = require('../../utils/SendToken');

module.exports = AsyncHandler(async (req, res, next) => {
  const { avatar, name, email, password, rePassword, isAdmin } = req.body;

  if (password !== rePassword)
    return next(new ErrorHandler(`${req.t('password_not_match')}`, 404));

  let user = await User.findOne({ email }).select('+password');

  if (user) return next(new ErrorHandler(`${req.t('user_registered')}`, 404));

  user = await User.create({ avatar, name, email, password, isAdmin });

  return SendToken(res, user, 200);
});
