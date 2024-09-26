const redis = require('redis')
const { RedisConnectionError } = require('../errors/customError')

let client = {}
let connectionTimeout

const statusConnectRedis = {
  CONNECT: 'connect',
  END: 'end',
  RECONNECT: 'reconnecting',
  ERROR: 'error',
}

const REDIS_CONNECT_TIMEOUT = 10000

const handleTimeoutError = () => {
  connectionTimeout = setTimeout(() => {
    throw new RedisConnectionError()
  }, REDIS_CONNECT_TIMEOUT)
}

const handleEventConnection = ({ instanceRedis }) => {
  instanceRedis.on(statusConnectRedis.CONNECT, () => {
    console.log(`Redis connection status: Connected!`)
    clearTimeout(connectionTimeout)
  })

  instanceRedis.on(statusConnectRedis.END, () => {
    console.log(`Redis connection status: Disconnected!`)
    // Connect retry
    handleTimeoutError()
  })

  instanceRedis.on(statusConnectRedis.RECONNECT, () => {
    console.log(`Redis connection status: Reconnecting!`)
    clearTimeout(connectionTimeout)
  })

  instanceRedis.on(statusConnectRedis.ERROR, (err) => {
    console.log(`Redis connection status: ${err}`)
    // Connect retry
    handleTimeoutError()
  })
}

const initRedis = async () => {
  const instanceRedis = redis.createClient()
  handleEventConnection({ instanceRedis })
  await instanceRedis.connect()
  client.redisClient = instanceRedis
}

const getRedis = () => client

const closeRedis = () => {
  if (client?.redisClient) {
    client.redisClient.quit(() => {
      console.log("Redis connection closed!")
    })
  }
}

module.exports = {
  initRedis,
  getRedis,
  closeRedis
}
