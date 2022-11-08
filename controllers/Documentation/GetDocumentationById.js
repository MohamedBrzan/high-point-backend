const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Documentation = require('../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(documentation_id)) return false;

  const documentation = await Documentation.findById(documentation_id);

  if (!documentation)
    return next(
      new ErrorHandler(`${req.t('documentation_schema_error')}`, 404)
    );

  return res.json(documentation);
});
