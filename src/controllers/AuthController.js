const User = require('../models/User')
const { generateToken } = require('../utils/token')

module.exports.authenticate = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user)
    return res.status(400).json({ message: 'Usuário ou senha incorretos' })

  if (password !== user.password)
    return res.status(400).json({ message: 'Usuário ou senha incorretos' })

  const token = generateToken(user.id)

  return res.status(200).json({ user, token })
}