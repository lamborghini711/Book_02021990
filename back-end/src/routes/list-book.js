let ListBookModel = require('../models/list-book.model')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:3001/create-book
router.post('/create-book', (req, res) => {
  if(!req.body) {
    return res.status(400).send('Request body is missing')
  }

  if(!req.body.book_id) {
    // ...
  }
  let model = new ListBookModel(req.body)
  model.save()
    .then(doc => {
      if(!doc || doc.length === 0) {
        return res.status(500).send(doc)
      }
      res.status(201).send(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET
router.get('/list-book', (req, res) => {
  if(!req.query.book_id) {
    return res.status(400).send('Missing URL parameter: book_id')
  }
  ListBookModel.findOne({
    book_id: req.query.book_id
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/update-book', (req, res) => {
  if(!req.query.book_id) {
    return res.status(400).send('Missing URL parameter: book_id')
  }
  ListBookModel.findOneAndUpdate({
    book_id: req.query.book_id
  }, req.body, {
    new: true
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// DELETE
router.delete('/delete-book', (req, res) => {
  if(!req.query.book_id) {
    return res.status(400).send('Missing URL parameter: book_id')
  }
  ListBookModel.findOneAndRemove({
    book_id: req.query.book_id
  })
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router