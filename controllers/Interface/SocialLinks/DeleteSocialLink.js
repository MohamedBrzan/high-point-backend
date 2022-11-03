const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, link_id } = req.params;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findSocialLink = interface.social_links.find(
    (link) => link._id.toString() === link_id
  );

  if (findSocialLink) {
    interface = await Interface.findByIdAndUpdate(
      interface_id,
      {
        $pull: {
          social_links: findSocialLink,
        },
      },
      {
        new: true,
        runValidators: true,
      }
    );
    return res.json({ message: req.t('social_link_deleted') });
  } else {
    return next(new ErrorHandler(req.t('social_link_error'), 404));
  }
});
