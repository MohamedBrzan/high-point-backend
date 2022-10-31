const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Documentation = require('../../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { documentation_id, document_id } = req.params;
  const {
    tab_title,
    tab_title_ar,
    desc_title,
    desc_title_ar,
    description,
    description_ar,
  } = req.body;

  const documentation = await Documentation.findById(documentation_id);

  if (!documentation)
    return next(new ErrorHandler(req.t('documentation_schema_error'), 404));

  const findDocument = documentation.document.find(
    (document) => document._id.toString() === document_id
  );

  if (findDocument) {
    findDocument.tab_title = tab_title;
    findDocument.tab_title_ar = tab_title_ar;
    findDocument.desc_title = desc_title;
    findDocument.desc_title_ar = desc_title_ar;
    findDocument.description = description;
    findDocument.description_ar = description_ar;

    await documentation.save();
    res.json(findDocument);
  } else {
    res.json({ message: req.t('document_error') });
  }
});
