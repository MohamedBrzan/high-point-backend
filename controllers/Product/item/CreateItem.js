const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Product = require('../../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    product_schema_id,
    item_title,
    item_title_ar,
    item_desc,
    item_desc_ar,
  } = req.body;

  let product = await Product.findById(product_schema_id);

  if (!product)
    return next(new ErrorHandler(`${req.t('product_schema_error')}`, 404));

  product = await Product.findByIdAndUpdate(
    product_schema_id,
    {
      $push: {
        items: { item_title, item_desc, item_title_ar, item_desc_ar },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(product);
});
