const AsyncHandler = require('../../middleWare/AsyncHandler');
const ContactUs = require('../../models/Contact_Us/Contact_Us');

module.exports = AsyncHandler(async (req, res, next) => {
  const contactUs = await ContactUs.find();

  return res.json(contactUs);
});
