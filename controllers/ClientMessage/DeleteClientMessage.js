const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ClientMessage = require('../../models/ClientMessage/ClientMessage');

module.exports = AsyncHandler(async (req, res, next) => {
  const { client_message_id } = req.params;

  let clientMessage = await ClientMessage.findById(client_message_id);

  if (!clientMessage)
    return next(
      new ErrorHandler(`${req.t('client_message_schema_error')}`, 404)
    );

  clientMessage = await ClientMessage.findByIdAndRemove(client_message_id);

  return res.json({ message: req.t('client_message_deleted') });
});
