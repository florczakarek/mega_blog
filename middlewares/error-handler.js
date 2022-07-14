export const ErrorMiddleware = (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'An error occured' });
};
