const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Product = require('../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const { product_id } = req.params;

  let product = await Product.findById(product_id);

  if (!product)
    return next(new ErrorHandler(`${req.t('product_schema_error')}`, 404));

  product = await Product.findByIdAndRemove(product_id);

  return res.json({ message: `${req.t('product_schema_deleted')}` });
});
