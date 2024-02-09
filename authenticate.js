const jwtUtils = require('../utils/jwtUtils');

const authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = await jwtUtils.verifyToken(token);
    req.user = { id: decoded.userId }; // Attach user to the request
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized' });
  }
};

module.exports = authenticate;
