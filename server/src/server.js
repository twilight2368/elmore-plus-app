const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const compression = require('compression')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const corsOptions = require('./configs/cors')
const ENV = require('./configs/configs')
const Database = require('./models')

const startApp = () => {
  const app = express()
  const PORT = ENV.APP.PORT
  const HOST = ENV.APP.HOST

  app.use(cors(corsOptions))
  app.use(helmet())
  app.use(compression())
  app.use(morgan('dev'))

  app.use(express.json())
  app.use(cookieParser())

  Database.countConnections()
  Database.checkOverload()

  app.use('/', require('./routes'))

  app.listen(PORT, HOST, () => {
    console.log(`Server started on http://${HOST}:${PORT}`)
  })
}

Database.getInstance(startApp)