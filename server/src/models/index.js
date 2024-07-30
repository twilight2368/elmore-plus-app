const mongoose = require('mongoose')
const os = require('os')
const ENV = require('../configs/configs')

const SECONDS = 5 * 1000

class Database { 
  constructor(startApp) {
    this.connectDatabase(startApp)
  }

  connectDatabase(startApp) {
    mongoose.connect(ENV.DATABASE.CONNECTION_STRING, {
      dbName: ENV.DATABASE.NAME
    })
    .then(() => console.log('Connected to Database successfully!'))
    .then(() => {
      startApp()
    })
    .catch((err) => {
      console.log(err.message)
      throw new Error("Error in connecting to Database")
    })
  }

  static getInstance(startApp) {
    if (Database.instance) {
      return Database.instance
    } else {
      Database.instance = new Database(startApp)
    }
  }

  static countConnections() {
    const numberOfConnections = mongoose.connections.length
    console.log('Number of current connection:', numberOfConnections)
    return numberOfConnections
  }

  static checkOverload() {
    setInterval(() => {
      const numberOfConnections = mongoose.connections.length
      const cores = os.cpus().length
      const memoryUsage = process.memoryUsage().rss / (1024 * 1024)
      console.log(`Memory ussage: ${memoryUsage} MB`)
      console.log('Current active connection:', numberOfConnections)
      const maxConnections = cores * 5
      if (numberOfConnections > maxConnections - 10) {
        console.log('Connection overload!!! Number of current connection: ', numberOfConnections)
      }
    }, SECONDS)
  }
}

module.exports = Database