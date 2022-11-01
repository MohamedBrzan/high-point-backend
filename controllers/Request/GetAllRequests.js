const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Request = require('../../models/Request/Request');

module.exports = AsyncHandler(async (req, res, next) => {
  const requests = await Request.find();

  return res.json(requests);
});
