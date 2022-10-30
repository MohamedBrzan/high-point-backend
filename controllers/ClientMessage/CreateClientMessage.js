const AsyncHandler = require('../../middleWare/AsyncHandler');
const ClientMessage = require('../../models/ClientMessage/ClientMessage');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    name,
    email,
    phone_or_whatsapp,
    company,
    country,
    number_of_network,
    network_traffic,
    network_type,
    message,
  } = req.body;

  const clientMessage = await ClientMessage.create({
    name,
    email,
    phone_or_whatsapp,
    company,
    country,
    number_of_network,
    network_traffic,
    network_type,
    message,
  });

  return res.json(clientMessage);
});
