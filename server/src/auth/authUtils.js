const jwt = require('jsonwebtoken')

const generateToken = (payload, secretKey, expiredDate) => {
  return jwt.sign(payload, secretKey, { expiresIn: expiredDate })
}

module.exports = {
  generateToken
}
