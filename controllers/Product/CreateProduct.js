const AsyncHandler = require('../../middleWare/AsyncHandler');
const Product = require('../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    header_text,
    header_text_ar,
    desc_text_one,
    desc_text_ar_one,
    desc_text_two,
    desc_text_ar_two,
    description,
    description_ar,
    video,
    footer_image,
    footer_video,
    footer_text,
    footer_text_ar,
  } = req.body;

  const product = await Product.create({
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    header_text,
    header_text_ar,
    desc_text_one,
    desc_text_ar_one,
    desc_text_two,
    desc_text_ar_two,
    description,
    description_ar,
    video,
    footer_image,
    footer_video,
    footer_text,
    footer_text_ar,
  });

  return res.json(product);
});
