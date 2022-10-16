const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');

module.exports = AsyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler(`${req.t('logged_out')}`, 404));

  return res.status(200).json({ message: `${req.t('logged_out_success')}` });
});
