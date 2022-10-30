const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Product = require('../../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const { product_id, item_id } = req.params;
  const { item_title, item_title_ar, item_desc, item_desc_ar } = req.body;

  let product = await Product.findById(product_id);

  if (!product)
    return next(new ErrorHandler(`${req.t('product_schema_error')}`, 404));

  const findItem = product.items.find(
    (item) => item._id.toString() === item_id
  );

  if (!findItem) return next(new ErrorHandler(`${req.t('item_error')}`, 404));

  findItem.item_title = item_title;
  findItem.item_title_ar = item_title_ar;
  findItem.item_title = item_title;
  findItem.item_desc = item_desc;
  findItem.item_desc_ar = item_desc_ar;

  await product.save();

  return res.json(product);
});
