const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ClientMessage = require('../../models/ClientMessage/ClientMessage');

module.exports = AsyncHandler(async (req, res, next) => {
  const { client_message_id } = req.params;

  const clientMessage = await ClientMessage.findById(client_message_id);

  if (!clientMessage)
    return next(
      new ErrorHandler(`${req.t('client_message_schema_error')}`, 404)
    );

  return res.json(clientMessage);
});
