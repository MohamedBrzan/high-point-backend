const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Tab = require('../../../models/Solution/Solution_Tab');
const Solution = require('../../../models/Solution/Solution_Solution');

module.exports = AsyncHandler(async (req, res, next) => {
  const { tab_id } = req.params;
  const { title, title_ar, image, description, description_ar } = req.body;

  // const image = req.file;

  let tab = await Tab.findById(tab_id);

  if (!tab) return next(new ErrorHandler(req.t('tab_error'), 404));

  const solution = await Solution.create({
    title,
    title_ar,
    image,
    description,
    description_ar,
  });

  tab = await Tab.findByIdAndUpdate(
    tab_id,
    {
      $push: {
        solutions: solution._id,
      },
    },
    { new: true, runValidators: true }
  );

  return res.json(solution);
});
