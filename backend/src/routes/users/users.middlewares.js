const jwt = require('jsonwebtoken');

exports.authorize = async (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) return res.status(401).send('Access denied. No token provided.');
  if (token.split(' ').length < 2) {
    return res
      .send('Invalid token, rember to put the Bearer prefix')
      .status(401);
  }

  token = token.split(' ')[1];

  try {
    req.user = jwt.verify(token, process.env.APP_SECRET);
  } catch (ex) {
    return res.status(401).send('Invalid token');
  }

  next();
};
