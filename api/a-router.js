const bcrypt = require('bcryptjs'); // npm i bcryptjs

const router = require('express').Router();


// reg and login rt
const author = require('../auths/auth-rtr.js');
const logger = require('../loggers/logger-router.js')

router.use('/auth', author)
router.use('/login', logger)

router.get('/', (req, res) => {
    res.json({ api: "Scan your 6@rc0d3"})
})

router.post('/hash', (req, res) => {
    const pass = req.body.password

    const hash = bcrypt.hashSync(pass, 12)

    res.status(200).json({ pass, hash})
})

module.exports = router