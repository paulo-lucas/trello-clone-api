const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@cluster0.igp0p.mongodb.net/trello?retryWrites=true&w=majority')
mongoose.Promise = global.Promise

module.exports = mongoose