const AsyncHandler = require('../../../middleWare/AsyncHandler');
const SolutionSchema = require('../../../models/Solution/Solution_Schema');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    header_text,
    header_text_ar,
    intro_text,
    intro_text_ar,
    footer_text,
    footer_text_ar,
  } = req.body;

  const new_solution_schema = {
    title,
    title_ar,
    sub_title,
    sub_title_ar,
    header_text,
    header_text_ar,
    intro_text,
    intro_text_ar,
    footer_text,
    footer_text_ar,
  };

  const solution = await SolutionSchema.create(new_solution_schema);

  return res.json(solution);
});
