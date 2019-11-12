const router = require('express').Router();
const bcrypt = require('bcryptjs'); // npm i bcryptjs

// reg and login rt
const author = require('../auths/auth-rtr.js');
const logger = require('../loggers/logger-router.js')

const db = require('../loggers/login-model.JS')

router.post("/register", (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10); // 2 ^ n
    user.password = hash;
  
    db.add(user)
      .then(saved => {
        req.session.username = saved.username;
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.post("/login", (req, res) => {
    let { username, password } = req.body;
  
    db.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          req.session.username = user.username; // << good: add properties to existing session object
          // req.session = { username: user.username } // bad panda: don't override the session object
          res.status(200).json({
            message: `Welcome ${user.username}!`
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });
  
  router.get("/logout", (req, res) => {
    if (req.session) {
      req.session.destroy(error => {
        if (error) {
          res
            .status(500)
            .json({
              message:
                "you can check out any time you like, but you can never leave..."
            });
        } else {
          res.status(200).json({ message: "logged out successfully" });
        }
      });
    } else {
      res.status(200).json({ message: "by felicia" });
    }
  });
  
  module.exports = router;
  