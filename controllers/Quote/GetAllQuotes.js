const AsyncHandler = require('../../middleWare/AsyncHandler');
const ErrorHandler = require('../../middleWare/ErrorHandler');
const Quote = require('../../models/Quote/Quote');

module.exports = AsyncHandler(async (req, res, next) => {
  const quotes = await Quote.find();

  return res.json(quotes);
});
