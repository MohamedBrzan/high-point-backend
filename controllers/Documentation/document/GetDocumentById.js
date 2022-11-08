const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Documentation = require('../../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_id, document_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(documentation_id)) return false;

  let documentation = await Documentation.findById(documentation_id);

  if (!documentation)
    return next(
      new ErrorHandler(`${req.t('documentation_schema_error')}`, 404)
    );

  const findDocument = documentation.document.find(
    (document) => document._id.toString() === document_id
  );

  if (findDocument) {
    return res.json(findDocument);
  } else {
    return res.json({ message: `${req.t('document_error')}` });
  }
});
