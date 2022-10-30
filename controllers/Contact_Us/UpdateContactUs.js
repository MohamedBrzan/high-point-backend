const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const { contact_us_id } = req.params;
  const {
    first_text,
    last_text,
    first_text_ar,
    last_text_ar,
    location,
    location_ar,
    address,
    branches,
    branches_ar,
    address_ar,
    question,
    question_ar,
    company_email,
    tel,
    fax,
  } = req.body;

  const title = {
    first_text,
    last_text,
  };

  const title_ar = {
    first_text_ar,
    last_text_ar,
  };

  const head_office = {
    location,
    location_ar,
    address,
    address_ar,
  };

  const work_inquiries = {
    question,
    question_ar,
    company_email,
  };

  const phone = {
    tel,
    fax,
  };

  let contactUs = await ContactUs.findById(contact_us_id);

  if (!contactUs)
    return next(new ErrorHandler(`${req.t('contact_us_schema_error')}`, 404));

  contactUs = await ContactUs.findByIdAndUpdate(
    contact_us_id,
    {
      title,
      title_ar,
      branches,
      branches_ar,
      head_office,
      work_inquiries,
      phone,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  return res.json(contactUs);
});
