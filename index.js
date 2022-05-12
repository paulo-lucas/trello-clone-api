const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./src/routes')

const app = express()
const port = 3333 || process.env.PORT

app.use(cors())
app.use(bodyParser.json())
app.use(router)

app.listen(port, function () {
  console.log('App running on port ' + port)
})