const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Request = require('../../models/Request/Request');

module.exports = AsyncHandler(async (req, res, next) => {
  const { request_id } = req.params;

  const request = await Request.findById(request_id);

  if (!request)
    return next(
      new ErrorHandler(req.t('request_schema_error'), 404)
    );

  return res.json(request);
});
