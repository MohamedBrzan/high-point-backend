const AsyncHandler = require('../../middleWare/AsyncHandler');
const Documentation = require('../../models/Documentation/Documentation');

module.exports = AsyncHandler(async (req, res, next) => {
  const { name, name_ar, footer_text, footer_text_ar } = req.body;

  const documentation = await Documentation.create({
    name,
    name_ar,
    footer_text,
    footer_text_ar,
  });

  return res.json(documentation);
});
