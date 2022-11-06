const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, proof_id } = req.params;
  const { image, explain } = req.body;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findProof = interface.proofs.proof.find(
    (proof) => proof._id.toString() === proof_id
  );

  if (findProof) {
    findProof.image = image;
    findProof.explain = explain;

    await interface.save();

    return res.json(findProof);
  } else {
    return next(new ErrorHandler(req.t('proof_error'), 404));
  }
});
