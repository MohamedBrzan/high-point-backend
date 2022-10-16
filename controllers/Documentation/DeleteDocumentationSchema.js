const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Documentation = require('../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_schema_id } = req.body;

  let documentation = await Documentation.findById(documentation_schema_id);

  if (!documentation)
    return next(
      new ErrorHandler(`${req.t('documentation_schema_error')}`, 404)
    );

  documentation = await Documentation.findByIdAndRemove(
    documentation_schema_id
  );

  return res.json({ message: `${req.t('documentation_schema_deleted')}` });
});
