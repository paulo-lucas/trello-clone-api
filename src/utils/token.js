const jwt = require('jsonwebtoken')
const { hash } = require('../config/auth')

module.exports.generateToken = (id) => jwt.sign({ id }, hash, { expiresIn: 86400 })