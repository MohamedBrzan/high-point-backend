const AsyncHandler = require('../../middleWare/AsyncHandler');
const Request = require('../../models/Request/Request');

module.exports = AsyncHandler(async (req, res, next) => {
  const { name, email, phone } = req.body;

  const request = await Request.create({
    name,
    email,
    phone,
  });

  return res.json(request);
});
