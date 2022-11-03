const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, solution_id } = req.params;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findSolution = interface.solutions.solution.find(
    (solution) => solution._id.toString() === solution_id
  );

  if (findSolution) {
    interface = await Interface.findByIdAndUpdate(
      interface_id,
      {
        $pull: {
          'solutions.solution': findSolution,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json({ message: req.t('solution_deleted') });
  } else {
    return next(new ErrorHandler(req.t('solution_error'), 404));
  }
});
