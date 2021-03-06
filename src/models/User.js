var mongoose = require('../database')
var Schema = mongoose.Schema

var Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
})


module.exports = mongoose.model('User', Schema)