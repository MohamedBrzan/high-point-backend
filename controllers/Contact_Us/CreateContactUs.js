const AsyncHandler = require('../../middleWare/AsyncHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const {
    title,
    title_ar,
    location,
    location_ar,
    address,
    address_ar,
    question,
    question_ar,
    company_email,
    tel,
    fax,
  } = req.body;

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

  const contactUs = await ContactUs.create({
    title,
    title_ar,
    head_office,
    work_inquiries,
    phone,
  });

  return res.json(contactUs);
});
