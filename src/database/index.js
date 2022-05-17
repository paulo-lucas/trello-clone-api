const mongoose = require('mongoose')
const connString = process.env.DB_CONN_STRING

mongoose.connect(connString)
mongoose.Promise = global.Promise

module.exports = mongoose