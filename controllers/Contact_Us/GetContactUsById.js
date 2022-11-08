const { default: mongoose } = require('mongoose');
const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const { contact_us_id } = req.params;

  // add this inside your route
  if (!mongoose.Types.ObjectId.isValid(contact_us_id)) return false;

  const contactUs = await ContactUs.findById(contact_us_id);

  if (!contactUs)
    return next(new ErrorHandler(`${req.t('contact_us_schema_error')}`, 404));

  return res.json(contactUs);
});
