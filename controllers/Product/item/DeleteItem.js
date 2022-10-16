const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Product = require('../../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const { product_schema_id, item_id } = req.body;

  let product = await Product.findById(product_schema_id);

  if (!product)
    return next(new ErrorHandler(`${req.t('product_schema_error')}`, 404));

  const findItem = product.items.find(
    (item) => item._id.toString() === item_id
  );

  if (!findItem) return next(new ErrorHandler(`${req.t('item_error')}`, 404));

  product = await Product.findByIdAndUpdate(
    product_schema_id,
    {
      $pull: {
        items: findItem,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json({ message: `${req.t('item_deleted')}` });
});
