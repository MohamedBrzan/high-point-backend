const AsyncHandler = require('../../../middleWare/AsyncHandler');
const Documentation = require('../../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    documentation_schema_id,
    tab_title,
    tab_title_ar,
    desc_title,
    desc_title_ar,
    description,
    description_ar,
  } = req.body;

  const new_document = {
    tab_title,
    tab_title_ar,
    desc_title,
    desc_title_ar,
    description,
    description_ar,
  };

  let documentation = await Documentation.findById(documentation_schema_id);

  if (!documentation)
    return next(
      new ErrorHandler(`${req.t('documentation_schema_error')}`, 404)
    );


  documentation = await Documentation.findByIdAndUpdate(
    documentation_schema_id,
    {
      $push: {
        document: new_document,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(documentation);
});
