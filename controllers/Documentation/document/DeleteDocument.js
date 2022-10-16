const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Documentation = require('../../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_schema_id, document_id } = req.body;

  let documentation = await Documentation.findById(documentation_schema_id);

  if (!documentation)
    return next(
      new ErrorHandler(`${req.t('documentation_schema_error')}`, 404)
    );

  const findDocument = documentation.document.find(
    (document) => document._id.toString() === document_id
  );

  if (findDocument) {
    documentation.document.pull(document_id);
    await documentation.save();
    return res.json({ message: `${req.t('document_deleted')}` });
  } else {
    return res.json({ message: `${req.t('document_error')}` });
  }
});
