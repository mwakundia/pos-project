const crypto = require('crypto');

const generateKeys = () => {
  const privateKey = crypto.randomBytes(32).toString('hex');
  const publicKey = crypto.randomBytes(32).toString('hex');

  return { privateKey, publicKey };
};

module.exports = generateKeys;