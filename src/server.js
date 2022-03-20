const express = require('express')
const app = express()
const {PORT} = require('./config')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(require('./module'))

app.listen({port:PORT},() => {
    console.log('create server!')
})