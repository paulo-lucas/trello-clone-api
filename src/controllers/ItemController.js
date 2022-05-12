const Item = require('../models/Item')
const User = require('../models/User')

module.exports.index = async (req, res) => {
  const user = await User.findOne({ id: req.userId })
  let items = await Item.find()

  items = items.filter(item => item.user._id == user._id)

  return res.status(200).json({ items })
}

module.exports.new = async (req, res) => {
  try {
    const { content } = req.body
    const user = await User.findOne({ id: req.userId })
    const item = await Item.create({ content, user })

    return res.status(200).json({ item })
  } catch (err) {
    return res.status(400).json({ message: 'Falha ao registrar' })
  }
}

module.exports.move = async (req, res) => {
  const { status } = req.body
  const { id } = req.params

  if (!status)
    return res.status(400).json({ message: 'Status não informado' })

  const item = await Item.findOne({ _id: id })

  if (!item)
    return res.status(400).json({ message: 'Item não encontrado' })

  const user = await User.findOne({ id: req.userId })

  if (user.id != item.user)
    return res.status(400).json({ message: 'Usuário não tem permissão para mover esse item' })

  item.status = status

  try {
    await item.save()
    return res.status(200).json({ item })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Erro ao atualizar status' })
  }
}

module.exports.delete = async (req, res) => {
  const { id } = req.params

  const item = await Item.findOne({ _id: id })

  if (!item)
    return res.status(400).json({ message: 'Item não encontrado' })

  const user = await User.findOne({ id: req.userId })

  if (user.id != item.user)
    return res.status(400).json({ message: 'Usuário não tem permissão para remover esse item' })

  try {
    await item.remove()
    return res.status(200).json({ message: 'Item removed' })
  } catch (err) {
    console.log(err)
    return res.status(400).json({ message: 'Erro ao remover item' })
  }
}