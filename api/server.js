const express = require('express')
const helmet  = require('helmet')
const cors  = require('cors')
const session = require('express-session')
const KSessStore = require('connect-session storage')


const enter = require('./a-router.js')
const logs = require('../loggers/logger-router');

const server = express()

mids(server)

server.use('/api', enter)
server.use(express.json())
server.use(cors())

server.use('/api/auth', enter)
server.use('/api/user', logs)

server.get('/', (req, res) => {
    res.send('Welcome, ask for something')
})
module.exports = server