const AsyncHandler = require('./AsyncHandler');
const ErrorHandler = require('./ErrorHandler');
const User = require('../models/User/User');
const jwt = require('jsonwebtoken');

module.exports = AsyncHandler(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) return next(new ErrorHandler('Please Login First', 404));

  const decoded = jwt.verify(token, `${process.env.JWT_SECRET_TOKEN}`);

  req.user = await User.findById(decoded.id);

  next();
});
