const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const sendEmail = require('../../utils/SendMail');

module.exports = AsyncHandler(async (req, res, next) => {
  const { email } = req.body;

  let user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler(`${req.t('user_not_exist')}`, 404));

  const token = user.generateToken();

  const url = `http://localhost:3000/authentication/reset_password/${user._id}/${token}`;

  sendEmail(email, url);

  return res.status(200).json({
    success: true,
  });
});
