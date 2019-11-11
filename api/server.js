const express = require('express')


const enter = require('./a-router.js')
const mids = require('/fig-mids.js');

const server = express()

mids(server)

server.use('/api', enter)


module.exports = server