const allowedLists = [
  'http://localhost:3000',
  'http://localhost:3000/'
]

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedLists.includes(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}

module.exports = corsOptions
