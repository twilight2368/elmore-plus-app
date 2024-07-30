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
    }
  }
}

const ENV = configs[process.env.NODE_ENV || 'DEVELOPMENT']

module.exports = ENV