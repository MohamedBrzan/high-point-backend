const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const NewsRoom = require('../../models/NewsRoom/NewsRoom');

module.exports = AsyncHandler(async (req, res, next) => {
  const { news_room_id } = req.params;

  let newsRoom = await NewsRoom.findById(news_room_id);

  if (!newsRoom)
    return next(new ErrorHandler(`${req.t('news_room_schema_error')}`, 404));

  newsRoom = await NewsRoom.findByIdAndRemove(news_room_id);

  return res.json({ message: `${req.t('news_room_schema_deleted')}` });
});
