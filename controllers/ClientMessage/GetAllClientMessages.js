const AsyncHandler = require('../../middleWare/AsyncHandler');
const ClientMessage = require('../../models/ClientMessage/ClientMessage');

module.exports = AsyncHandler(async (req, res, next) => {
  const clientMessages = await ClientMessage.find();

  return res.json(clientMessages);
});
