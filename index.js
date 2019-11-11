const express = require('express')
const helmet = require('helmet')

const db;
const user;

const server = express()

server.use(helmet())
server.use(express.json())

server.get('/', (req, res) => {
    res.send("Please Scan Your 6@&c0d3")
})