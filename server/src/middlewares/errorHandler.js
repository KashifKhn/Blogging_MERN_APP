const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message = "Some thing went Wrong!" } = err;
  res.status(statusCode).json(message);
};

export default errorHandler;
