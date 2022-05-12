const { Router } = require("express")

const Auth = require('./controllers/AuthController')
const Item = require('./controllers/ItemController')
const User = require('./controllers/UserController')

const authMiddleware = require('./middlewares/auth')

const router = Router()

router.post('/login', Auth.authenticate)

router.post('/register', User.new)

router.get('/item', authMiddleware, Item.index)
router.post('/item/new', authMiddleware, Item.new)
router.put('/item/:id', authMiddleware, Item.move)
router.delete('/item/:id', authMiddleware, Item.delete)

router.patch('/teste', (req, res) => res.send(req.body))

module.exports = router
