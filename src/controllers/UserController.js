const User = require('../models/User')
const { generateToken } = require('../utils/token')

module.exports.new = async (req, res) => {
  try {
    const user = await User.create(req.body)

    const token = generateToken(user.id)

    return res.status(200).json({ user, token })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Falha ao registrar' })
  }

}