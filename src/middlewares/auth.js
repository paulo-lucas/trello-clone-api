const jwt = require('jsonwebtoken')
const { hash } = require('../config/auth')

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader)
    return res.status(400).json({ message: 'Token não informado' })

  const parts = authHeader.split(' ')

  if (!parts.length === 2)
    return res.status(400).json({ message: 'Erro de token' })

  const [scheme, token] = parts

  if (!/^Bearer$/i.test(scheme))
    return res.status(400).json({ message: 'Token mal formatado' })

  jwt.verify(token, hash, (err, decoded) => {
    if (err)
      return res.status(400).json({ message: 'Token inválido' })

    req.userId = decoded.id
    return next()
  })
}