const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id } = req.params;
  const { image, explain } = req.body;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  interface = await Interface.findByIdAndUpdate(
    interface_id,
    {
      $push: {
        'proofs.proof': {
          image,
          explain,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(interface.proofs.proof);
});
