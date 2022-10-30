const AsyncHandler = require('../../middleWare/AsyncHandler');
const NewsRoom = require('../../models/NewsRoom/NewsRoom');

module.exports = AsyncHandler(async (req, res, next) => {
  let newsRoom = await NewsRoom.find();

  return res.json(newsRoom);
});
