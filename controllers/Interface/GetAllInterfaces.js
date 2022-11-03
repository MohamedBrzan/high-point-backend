const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Interface = require('../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const interfaces = await Interface.find();
  res.json(interfaces);
});
