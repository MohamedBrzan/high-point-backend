const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ClientMessage = require('../../models/ClientMessage/ClientMessage');

module.exports = AsyncHandler(async (req, res, next) => {
  const { client_message_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(client_message_id)) return false;

  const clientMessage = await ClientMessage.findById(client_message_id);

  if (!clientMessage)
    return next(
      new ErrorHandler(`${req.t('client_message_schema_error')}`, 404)
    );

  return res.json(clientMessage);
});
