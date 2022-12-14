const ErrorHandler = require('../middleWare/ErrorHandler');

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || 'Internal Server Error';

  if (err.name === 'CastError') {
    console.log(err)
    const message = `Resource Not Found . This ${err.path} : (${err.value}) Is Invalid`;

    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
