const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'shh';

function buildToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
  };
  const options = {
    expiresIn: '1d'
  };
  const token = jwt.sign(payload, JWT_SECRET, options);
  return token;
}

module.exports = {
  buildToken,
  JWT_SECRET
};