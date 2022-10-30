const AsyncHandler = require('../../middleWare/AsyncHandler');
const NewsRoom = require('../../models/NewsRoom/NewsRoom');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    images,
    title,
    title_ar,
    sub_description,
    sub_description_ar,
    description,
    description_ar,
  } = req.body;

  const newsRoom = await NewsRoom.create({
    owner: req.user.id,
    images,
    title,
    title_ar,
    sub_description,
    sub_description_ar,
    description,
    description_ar,
  });

  return res.json(newsRoom);
});
