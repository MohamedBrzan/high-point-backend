const AsyncHandler = require('../../middleWare/AsyncHandler');
const Quote = require('../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    rule_text,
    rule_text_ar,
  } = req.body;

  const quote = await Quote.create({
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    rule_text,
    rule_text_ar,
  });

  return res.json(quote);
});
