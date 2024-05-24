const jwt = require('jsonwebtoken');
const { privateKey } = require('./generateKeys')();

const generateToken = (payload) => {
  const options = {
    expiresIn: '1d',
  };

  return jwt.sign(payload, privateKey, options);
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, privateKey);
    return decoded;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};