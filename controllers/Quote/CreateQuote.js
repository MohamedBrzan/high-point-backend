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
    name,
    name_ar,
    item,
    item_ar,
    question,
    answer,
    rule_text,
    rule_text_ar,
  } = req.body;

  const decisions = {
    name,
    name_ar,
    list: [{ item, item_ar }],
  };

  const q_a = {
    question,
    answer,
  };

  const quote = await Quote.create({
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    description,
    description_ar,
    decisions,
    q_a,
    rule_text,
    rule_text_ar,
  });
  
  return res.json(quote);
});
