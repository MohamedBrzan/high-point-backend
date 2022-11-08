const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Product = require('../../models/Product/Product');

module.exports = AsyncHandler(async (req, res, next) => {
  const { product_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(product_id)) return false;

  let product = await Product.findById(product_id);

  if (!product)
    return next(new ErrorHandler(`${req.t('product_schema_error')}`, 404));

  return res.json(product);
});
