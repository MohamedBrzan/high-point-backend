const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const NewsRoom = require('../../models/NewsRoom/NewsRoom');

module.exports = AsyncHandler(async (req, res, next) => {
  const { news_room_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(news_room_id)) return false;

  const newsRoom = await Blog.findById(news_room_id);

  if (!newsRoom)
    return next(new ErrorHandler(`${req.t('news_room_schema_error')}`, 404));

  return res.json(newsRoom);
});
