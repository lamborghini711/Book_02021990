let UsersModel = require('../models/user.model')
let express = require('express')
let router = express.Router()

// Create a new user
// POST localhost:3000/user
router.post('/api/user-create', (req, res) => {

  req.body['user_id'] = Math.floor((Math.random() * 10000000) + 1)

  let model = new UsersModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      res.status(200).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.post('/api/user-login', (req, res) => {

  UsersModel.findOne({
    username: req.body.username,
    password: req.body.password
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})


module.exports = router