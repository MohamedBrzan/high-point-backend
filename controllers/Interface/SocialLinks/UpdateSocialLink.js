const AsyncHandler = require('../../../middleWare/AsyncHandler');
const ErrorHandler = require('../../../middleWare/ErrorHandler');
const Interface = require('../../../models/Interface/Interface');

module.exports = AsyncHandler(async (req, res, next) => {
  const { interface_id, link_id } = req.params;
  const { name, name_ar, url } = req.body;

  let interface = await Interface.findById(interface_id);

  if (!interface)
    return next(new ErrorHandler(req.t('interface_schema_error'), 404));

  const findSocialLink = interface.social_links.find(
    (link) => link._id.toString() === link_id
  );

  if (findSocialLink) {
    findSocialLink.name = name;
    findSocialLink.name_ar = name_ar;
    findSocialLink.url = url;

    return res.json(findSocialLink);
  } else {
    return next(new ErrorHandler(req.t('social_link_error'), 404));
  }
});
