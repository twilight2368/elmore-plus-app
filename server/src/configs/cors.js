const allowedLists = [
  'http://localhost:5173'
]

const corsOptions = {
  origin: function(origin, callback) {
    if (allowedLists.includes(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  }
}

module.exports = corsOptions
