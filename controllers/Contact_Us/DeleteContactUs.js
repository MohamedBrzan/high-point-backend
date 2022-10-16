const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const { contact_schema_us_id } = req.body;

  let contactUs = await ContactUs.findById(contact_schema_us_id);

  if (!contactUs)
    return next(new ErrorHandler(`${req.t('contact_us_schema_error')}`, 404));

  contactUs = await ContactUs.findByIdAndRemove(contact_schema_us_id);

  return res.json({ message: `${req.t('contact_us_schema_deleted')}` });
});
