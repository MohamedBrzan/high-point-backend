const AsyncHandler = require('../../middleWare/AsyncHandler');
const Career = require('../../models/Career/Career');

module.exports = AsyncHandler(async (req, res, next) => {
  const careers = await Career.find();

  return res.json(careers);
});
