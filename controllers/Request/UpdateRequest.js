const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Request = require('../../models/Request/Request');

module.exports = AsyncHandler(async (req, res, next) => {
  const { request_id } = req.params;

  let request = await Request.findById(request_id);

  if (!request)
    return next(new ErrorHandler(req.t('request_schema_error'), 404));

  request = await Request.findByIdAndUpdate(request_id, req.body, {
    new: true,
    runValidators: true,
  });

  return res.json(request);
});
