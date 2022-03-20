const express = require('express')
const app = express()
const port = require('./config')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require('./module'))

app.listen(port,console.log('create server!'))