const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Interface = require('../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(interface_id)) return false;

  const interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  res.json(interface);
});
