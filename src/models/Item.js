var mongoose = require('../database')
var Schema = mongoose.Schema

var Schema = new Schema({
    content: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    status: {
        type: String,
        enum: ['pending', 'inProgress', 'review', 'closed'],
        default: 'pending'
    },
})

module.exports = mongoose.model('Item', Schema)