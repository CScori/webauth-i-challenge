const express = require('express')
const helmet  = require('helmet')
const cors  = require('cors')
const session = require('express-session')
const KSessStore = require('connect-session storage')
const enter = require('./a-router.js')
const logs = require('../loggers/logger-router');
const kConnect = require('../data/dbconfig.js')
const server = express()

const sKfig = {
    name: 'logger',
    secret:  process.env.COOKIE_S || "private note",
    cookie: {
       maxAge: 1000 * 60 * 60, 
       secure: process.env.NODE_ENV ==='dev'? false : true, 
       httpOnly: true,
    },
    resave: false,
    saveUninitialized: true,
    store: new KSessStore({
        knex: kConnect,
        clearInterval: 1000 * 60 * 10,
        tablename: 'log_sesh',
        sidfieldname: "id",
        createtable: true
    })
}

server.use(express.json())
server.use(cors())
server.use(helmet())
server.session(session(sKfig))
server.use('/api/auth', enter)
server.use('/api/user', logs)

server.get('/', (req, res) => {
    res.send('Welcome, ask for something')
})
module.exports = server