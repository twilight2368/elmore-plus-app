const jwt = require('jsonwebtoken')
const ENV = require('../configs/configs')
const { UnauthorizedError, BadRequestError, InternalServerError, CustomError } = require('../errors/customError')
const userDaos = require('../daos/userDaos')

const ACCESS_TOKEN_SECRET_KEY = ENV.KEY.AT_SECRET_KEY

const authToken = (req, res, next) => {
  const accessToken = req.cookies?.accessToken
  if (!accessToken) throw new UnauthorizedError("No access token!")

  jwt.verify(accessToken, ACCESS_TOKEN_SECRET_KEY, async (err, decode) => {
    if (err) {
      if (err.name == 'TokenExpiredError') {
        throw new CustomError(err.message, 403, err.name)
      } else if (err.name == 'JsonWebTokenError') {
        throw new CustomError(err.message, 401, err.name)
      } else {
        throw new InternalServerError("Something went wrong when verifying token")
      }
    }

    const { userId } = decode
    const foundUser = await userDaos.findOneUser({ _id: userId })
    if (!foundUser) throw new BadRequestError("User does not exist!")
    req.userId = userId

    next()
  })
}

module.exports = {
  authToken
}
