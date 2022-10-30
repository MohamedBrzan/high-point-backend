const AsyncHandler = require('../../middleWare/AsyncHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
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

  const contactUs = await ContactUs.create({
    title,
    title_ar,
    branches,
    branches_ar,
    head_office,
    work_inquiries,
    phone,
  });

  return res.json(contactUs);
});
