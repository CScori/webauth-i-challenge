const router = require('express').Router()

const Helper = require('./login-model.js')
const auths = require('../auths/req-auth.js');

router.get('/', auths, (req, res) => {
    Helper.find()
    .then(login => {
        res.json(login)
    })
    .catch(err => res.send(err))
})

module.exports = router