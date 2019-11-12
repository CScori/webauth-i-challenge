const crypt = require('bycryptjs')

const loggers = require('../loggers/login-model.js')

module.exports = (req, res, next) => {
if (req.session && req,session.username) {
    next()
} else {
    res.status(401).json({ message: 'Log In'})
}

    // let {username, password} =req.headers

    // if (username && password) {
    //     loggers.findById({ username })
    //     .first()
    //     .then(user => {
    //         if (user && crypt.compareSync(password, user.password)) {
    //             next()
    //         } else {
    //             res.status(401).json({message: "incorrect credentals"})
    //         }
    //     })
    // .catch(err => {
    //     res.status(500).json({message: 'server err'})
    // })
    // } else {
    //     res.status(400).json({ message: 'Please provide creds'})
    // }
}