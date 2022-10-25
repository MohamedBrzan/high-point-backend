const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const bcrypt = require('bcrypt');
const validator = require('validator');

module.exports = AsyncHandler(async (req, res, next) => {
  const { password, confirmPassword, user_id } = req.body;

  let user = await User.findById(user_id).select('+password');

  if (!user) return next(new ErrorHandler(`${req.t('user_not_exist')}`, 404));

  if (password !== confirmPassword)
    return next(new ErrorHandler(`${req.t('password_not_match')}`, 400));

  if (!validator.isStrongPassword(password))
    return next(new ErrorHandler(`${req.t('password_weak')}`, 400));

  const newHashedPassword = await bcrypt.hash(password, 12);

  user = await User.findByIdAndUpdate(
    user_id,
    {
      password: newHashedPassword,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    user,
  });
});
