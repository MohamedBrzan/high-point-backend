const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const About = require('../../models/About/About');

module.exports = AsyncHandler(async (req, res, next) => {
  let all_about = await About.find();

  return res.json(all_about);
});
