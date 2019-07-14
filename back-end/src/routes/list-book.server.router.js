let ListBookModel = require('../models/list-book.model.server')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:5000/api/create-book
router.post('/api/create-book', (req, res) => {
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

// GET DETAILS
router.get('/api/book-detail', (req, res) => {
  let select = {
    // data_SV1 : 0,
    // data_SV2 : 0,
    book_appoint: 0,
    book_hot: 0,
    thumb : 0,
  }
  let filter = {
    book_id: parseInt(req.query.filter)
  }
  ListBookModel.findOne(filter, select)
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET CHAPTER
router.get('/api/get-chapter', (req, res) => {
  let select = {
    data_SV1 : 1
  }
  let filter = {
    book_id: parseInt(req.query.filter)
  }
  ListBookModel.findOne(filter, select)
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET LIST
router.get('/api/list-book', (req, res) => {
  let filter = {}
  if(req.query.book_hot) {
    filter.book_hot = true;
  }
  if(req.query.book_appoint) {
    filter.book_appoint = true;
  }
  let select = {
    name : 1, thumb: 1, read: 1, last_chapter: 1, folow: 1, book_id: 1
  }
  let limit = 32;
  let page = 0;
  if(req.query.page) {
    page = req.query.page
  }
  let respon = {};
  
  ListBookModel.count()
      .then(count => {
        respon['total'] = count
      })

  ListBookModel.find(filter,select).limit(limit).skip(page)
    .then(doc => {
      respon['items'] = doc
      res.json(respon)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// UPDATE
router.put('/api/update-book', (req, res) => {
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
router.delete('/api/delete-book', (req, res) => {
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