const errorHandler = (err, req, res, next) => {
  const { statusCode = 500, message = "Some thing went Wrong!" } = err;

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
};

export default errorHandler;
