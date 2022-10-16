const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const User = require('../../models/User/User');

module.exports = AsyncHandler(async (req, res, next) => {
  const { user_id } = req.body;

  let user = await User.findById(user_id);

  if (!user) return next(new ErrorHandler(`${req.t('user_not_found')}`, 404));

  return res.json(user);
});
