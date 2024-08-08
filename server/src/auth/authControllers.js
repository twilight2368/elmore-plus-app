const authServices = require("./authServices")
const ENV = require('../configs/configs')

const CLIENT_URL = ENV.CLIENT_URL

const signin = async (req, res, next) => {
  const authenticatedData = await authServices.signin({ email: req.body.email, password: req.body.password })
  res.cookie("accessToken", authenticatedData.accessToken, {
    maxAge: 1*60*60*1000, // 1 hour
    httpOnly: true
  })

  res.cookie("refreshToken", authenticatedData.refreshToken, {
    maxAge: 7*24*60*60*1000, // 7 days
    httpOnly: true
  })
  res.status(200).json({
    message: "Successfully login!",
    data: authenticatedData.user
  })
}

const signup = async (req, res, next) => {
  const authenticatedData = await authServices.signup({ email: req.body.email, password: req.body.password, username: req.body.username })
  res.cookie("accessToken", authenticatedData.accessToken, {
    maxAge: 1*60*60*1000, // 1 hour
    httpOnly: true
  })

  res.cookie("refreshToken", authenticatedData.refreshToken, {
    maxAge: 7*24*60*60*1000, // 7 days
    httpOnly: true
  })
  res.status(200).json({
    message: "Successfully login!",
    data: authenticatedData.user
  })
}

const logout = async (req, res, next) => {
  const logoutStatus = await authServices.logout(req.userId)
  res.cookie("accessToken", null)
  res.cookie("refreshToken", null)
  res.status(200).json({
    message: "Successfully logout!"
  })
}

const refreshToken = async (req, res, next) => {
  const authenticatedData = await authServices.refreshToken({ email: req.body.email, password: req.body.password })
  res.cookie("accessToken", authenticatedData.accessToken, {
    maxAge: 1*60*60*1000, // 1 hour
    httpOnly: true
  })

  res.cookie("refreshToken", authenticatedData.refreshToken, {
    maxAge: 7*24*60*60*1000, // 7 days
    httpOnly: true
  })
  res.status(200).json({
    message: "Successfully refresh!",
    data: authenticatedData.user
  })
}

const googleOAuthCallback = async (req, res, next) => {
  try {
    // Get the code from query string
    const code = req.query.code

    // Get the id and access token with the code
    const { id_token, access_token } = await authServices.getGoogleOAuthToken(code)

    // Get user with tokens
    const { accessToken, refreshToken } = await authServices.getGoogleUser(id_token, access_token)    
    
    // Set cookies
    res.cookie("accessToken", accessToken, {
      maxAge: 1*60*60*1000, // 1 hour
      httpOnly: true
    })

    res.cookie("refreshToken", refreshToken, {
      maxAge: 7*24*60*60*1000, // 7 days
      httpOnly: true
    })

    // Redirect back to client
    res.redirect(`${CLIENT_URL}/auth/sign-in`)
  } catch (error) {
    console.log(error)
    res.redirect(`${CLIENT_URL}/oauth/error`)
  }
}

const facebookAuth = async(req, res, next) => {
  const authenticatedData = await authServices.facebookAuth(req.body.accessToken, req.body.userID)
  res.cookie("accessToken", authenticatedData.accessToken, {
    maxAge: 1*60*60*1000, // 1 hour
    httpOnly: true
  })

  res.cookie("refreshToken", authenticatedData.refreshToken, {
    maxAge: 7*24*60*60*1000, // 7 days
    httpOnly: true
  })
  res.status(200).json({
    message: "Successfully login!",
    data: authenticatedData.user
  })
}

const authControllers = {
  signin,
  signup,
  logout,
  refreshToken,
  googleOAuthCallback,
  facebookAuth
}

module.exports = authControllers
