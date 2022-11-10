const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Documentation = require('../../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_id, document_id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(documentation_id))
    return next(new ErrorHandler(req.t('documentation_schema_error'), 404));

  let documentation = await Documentation.findById(documentation_id);

  if (!documentation)
    return next(new ErrorHandler(req.t('documentation_schema_error'), 404));

  if (!mongoose.Types.ObjectId.isValid(document_id))
    return next(new ErrorHandler(req.t('document_error'), 404));

  const findDocument = documentation.document.find(
    (document) => document._id.toString() === document_id
  );

  if (findDocument) {
    await Documentation.findByIdAndUpdate(
      documentation_id,
      {
        $pull: {
          document: findDocument,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json({ message: req.t('document_deleted') });
  } else {
    return res.json({ message: req.t('document_error') });
  }
});
