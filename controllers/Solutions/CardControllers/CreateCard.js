const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Card = require('../../../models/Solution/Solution_Card');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    card_image,
    view_image,
    image_text,
    image_text_ar,
    description,
    description_ar,
  } = req.body;

  const card = await Card.create({
    title,
    title_ar,
    card_image,
    view_image,
    image_text,
    image_text_ar,
    description,
    description_ar,
  });

  return res.json(card);
});
