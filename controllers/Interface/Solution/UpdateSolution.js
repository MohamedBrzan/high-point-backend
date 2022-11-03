const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, solution_id } = req.params;
  const {
    title,
    title_ar,
    description,
    description_ar,
    solution_image,
    anime_image,
  } = req.body;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findSolution = interface.solutions.solution.find(
    (solution) => solution._id.toString() === solution_id
  );

  if (findSolution) {
    findSolution.title = title;
    findSolution.title_ar = title_ar;
    findSolution.description = description;
    findSolution.description_ar = description_ar;
    findSolution.solution_image = solution_image;
    findSolution.anime_image = anime_image;

    return res.json(findSolution);
  } else {
    return next(new ErrorHandler(req.t('solution_error'), 404));
  }
});
