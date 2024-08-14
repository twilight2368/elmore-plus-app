require('dotenv').config()

const configs = {
  DEVELOPMENT: {
    APP: {
      PORT: process.env.DEV_PORT,
      HOST: process.env.DEV_HOST
    },
    DATABASE: {
      CONNECTION_STRING: process.env.DEV_DB_CONNECTION_STRING,
      NAME: process.env.DEV_DB_NAME
    },
    KEY: {
      AT_SECRET_KEY: process.env.DEV_AT_SECRET_KEY,
      RT_SECRET_KEY: process.env.DEV_RT_SECRET_KEY,
    },
    CLIENT_URL: process.env.DEV_CLIENT_URL,
    GOOGLE_OAUTH: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      REDIRECT_URL: process.env.OAUTH_REDIRECT_URL,
    }
  },
  PRODUCTION: {
    APP: {
      PORT: process.env.PROD_PORT,
      HOST: process.env.PROD_HOST
    },
    DATABASE: {
      CONNECTION_STRING: process.env.PROD_DB_CONNECTION_STRING,
      NAME: process.env.PROD_DB_NAME
    },
    KEY: {
      AT_SECRET_KEY: process.env.PROD_AT_SECRET_KEY,
      RT_SECRET_KEY: process.env.PROD_RT_SECRET_KEY,
    },
    CLIENT_URL: process.env.PROD_CLIENT_URL,
    GOOGLE_OAUTH: {
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      REDIRECT_URL: process.env.REDIRECT_URL,
    }
  }
}

const ENV = configs[process.env.NODE_ENV || 'DEVELOPMENT']

module.exports = ENV