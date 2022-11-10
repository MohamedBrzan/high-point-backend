const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');
const SendToken = require('../../utils/SendToken');

module.exports = AsyncHandler(async (req, res, next) => {
  const { email } = req.body;

  let user = await User.findOne({ email });

  if (!user) return next(new ErrorHandler(req.t('login_error'), 404));

  return SendToken(res, user, 200);
});
