const axios = require('axios')
const qs = require('querystring')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const userDaos = require("../daos/userDaos")
const authUtils = require('./authUtils')
const { NotFoundError, BadRequestError, UserAlreadyExistError, CustomError, InternalServerError } = require("../errors/customError")
const ENV = require('../configs/configs')

const ACCESS_TOKEN_SECRET_KEY = ENV.KEY.AT_SECRET_KEY
const REFRESH_TOKEN_SECRET_KEY = ENV.KEY.RT_SECRET_KEY
const CLIENT_ID = ENV.GOOGLE_OAUTH.CLIENT_ID
const CLIENT_SECRET = ENV.GOOGLE_OAUTH.CLIENT_SECRET
const OAUTH_REDIRECT_URL = ENV.GOOGLE_OAUTH.REDIRECT_URL

const signin = async ({ email, password }) => {
  const foundUser = await userDaos.findOneUser({ email: email })
  if (!foundUser) throw new NotFoundError("User does not exist!")

  const compareResult = await bcrypt.compare(password, foundUser.password)
  if (!compareResult) throw new BadRequestError("Password is incorrect!")

  const payload = {
    userId: foundUser._id,
    email: foundUser.email,
    username: foundUser.username,
    realname: foundUser.realname,
    country: foundUser.country,
    avatarLink: foundUser.avatarLink
  }

  const accessToken = authUtils.generateToken(payload, ACCESS_TOKEN_SECRET_KEY, "1h")
  const refreshToken = authUtils.generateToken(payload, REFRESH_TOKEN_SECRET_KEY, "7d")

  const updatedUser = await userDaos.updateUserById(foundUser._id, { isActive: true })

  return {
    user: updatedUser,
    accessToken,
    refreshToken
  }
}

const signup = async (userData) => {
  const { username, email, password } = userData
  const foundUser = await userDaos.findOneUser({ email: email })
  if (foundUser) throw new UserAlreadyExistError()

  const hashPassword = await bcrypt.hash(password, 10)
  const userDocument = {
    email: email,
    password: hashPassword,
    username: username,
    isActive: true
  }

  const newUser = await userDaos.createNewUser(userDocument)

  const payload = {
    userId: newUser._id,
    email: newUser.email,
    username: newUser.username,
  }

  const accessToken = authUtils.generateToken(payload, ACCESS_TOKEN_SECRET_KEY, "1h")
  const refreshToken = authUtils.generateToken(payload, REFRESH_TOKEN_SECRET_KEY, "7d")

  return {
    user: newUser,
    accessToken,
    refreshToken
  }
}

const logout = async (userId) => {
  const lastLogined = new Date()
  await userDaos.updateUserById(userId, { isActive: false, lastLogined: lastLogined })
  return true
}

const refreshToken = async (refreshToken) => {
  try {
    const decode = jwt.verify(refreshToken, REFRESH_TOKEN_SECRET_KEY)
    const { userId } = decode
    const foundUser = await userDaos.findOneUser({ _id: userId })

    if (!foundUser) throw new NotFoundError("User does not exist!")

    const payload = {
      userId: foundUser._id,
      email: foundUser.email,
      username: foundUser.username,
      realname: foundUser.realname,
      country: foundUser.country,
      avatarLink: foundUser.avatarLink
    }

    const newAccessToken = authUtils.generateToken(payload, ACCESS_TOKEN_SECRET_KEY, "1h")
    const newRefreshToken = authUtils.generateToken(payload, REFRESH_TOKEN_SECRET_KEY, "7d")

    const updatedUser = await userDaos.updateUserById(foundUser._id, { isActive: true })

    return {
      user: updatedUser,
      accessToken: newAccessToken,
      refreshToken: newRefreshToken,
    }
  } catch (err) {
    if (err) {
      if (err.name == 'TokenExpiredError') {
        throw new CustomError(err.message, 403, err.name)
      } else if (err.name == 'JsonWebTokenError') {
        throw new CustomError(err.message, 401, err.name)
      } else {
        throw new InternalServerError("Something went wrong when verifying token")
      }
    }
  }
}

const getGoogleOAuthToken = async (code) => {
  const url = 'https://oauth2.googleapis.com/token'

  const values = {
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: OAUTH_REDIRECT_URL,
    grant_type: 'authorization_code'
  }

  try {
    const response = await axios.post(url, qs.stringify(values), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
    throw new CustomError(error.message, 500, error.name)
  }
}

const getGoogleUser = async (id_token, access_token) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
      headers: {
        Authorization: `Bearer ${id_token}`
      }
    })
    const googleuser = response.data

    const user = await userDaos.updateUser(
      { email: googleuser.email }, 
      { 
        email: googleuser.email,
        username: googleuser.name,
        avatarLink: googleuser.picture,
        isActive: true,
      }
    )

    const payload = {
      userId: user._id,
      email: googleuser.email,
      username: googleuser.name,
      picture: googleuser.picture
    }

    const accessToken = authUtils.generateToken(payload, ACCESS_TOKEN_SECRET_KEY, "1h")
    const refreshToken = authUtils.generateToken(payload, REFRESH_TOKEN_SECRET_KEY, "7d")

    return {
      accessToken,
      refreshToken
    }

  } catch (error) {
    console.log(error)
    throw new CustomError(error.message, 500, error.name)
  }
}

const facebookAuth = async (clientAccessToken, userID) => {
  try {
    const response = await axios.get(
      `https://graph.facebook.com/v20.0/${userID}?fields=id,name,email,picture&access_token=${clientAccessToken}`
    );

    const { name, email, picture } = response.data;

    const user = await userDaos.updateUser(
      { email: email }, 
      { 
        email: email,
        username: name,
        avatarLink: picture.data.url,
        isActive: true,
      }
    );

    const payload = {
      userId: user._id,
      email: user.email,
      username: user.username,
      picture: user.avatarLink
    }

    const accessToken = authUtils.generateToken(payload, ACCESS_TOKEN_SECRET_KEY, "1h")
    const refreshToken = authUtils.generateToken(payload, REFRESH_TOKEN_SECRET_KEY, "7d")

    return {
      user: user,
      accessToken,
      refreshToken
    }

  } catch (error) {
    console.error(error);
    throw new Error(error)
  }
}

const authServices = {
  signin,
  signup,
  logout,
  refreshToken,
  getGoogleOAuthToken,
  getGoogleUser,
  facebookAuth
}

module.exports = authServices
