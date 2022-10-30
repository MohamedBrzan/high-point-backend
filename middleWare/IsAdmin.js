const AsyncHandler = require('./AsyncHandler');
const ErrorHandler = require('./ErrorHandler');
const User = require('../models/User/User');

module.exports = AsyncHandler(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id);

  if (!user || id) return next(new ErrorHandler('Please Login First', 404));

  if (user.isAdmin !== true)
    return next(new ErrorHandler(req.t('admin_process_error'), 404));

  next();
});
