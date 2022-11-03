const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id } = req.params;
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

  interface = await Interface.findByIdAndUpdate(
    interface_id,
    {
      $push: {
        'solutions.solution': {
          title,
          title_ar,
          description,
          description_ar,
          solution_image,
          anime_image,
        },
      },
    },
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(interface.solutions.solution);
});
