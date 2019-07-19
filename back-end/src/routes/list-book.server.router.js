let ListBookModel = require('../models/list-book.model.server')
let express = require('express')
let router = express.Router()

// Create a new customer
// POST localhost:5000/api/create-book
router.post('/api/create-book', (req, res) => {
  if(req.body.obj.name.length === 0) {
    return res.status(400).send('Request body is missing')
  }
  ListBookModel.count()
    .then(count => {
      req.body.obj['book_id'] = 1000000000 + count + 1;
      let model = new ListBookModel(req.body.obj)
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
})

// GET DETAILS
router.get('/api/book-detail', (req, res) => {
  let select = {
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
      let response = [];
      if (req.query.chapter){
        let chapter = parseFloat(req.query.chapter)
        for(let i = 0; i< doc.data_SV1.length; i++){
          if (doc.data_SV1[i].chapter_number === chapter) {
            response.push(doc.data_SV1[i])
          }
        }
      } else {
        response = doc
      }
      res.json(response)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// SEARCH
router.get('/api/search', (req, res) => {
  let select = {
    name : 1, cover: 1, book_id: 1,
  }
  let filter = {
    full_text_search: {$regex : req.query.filter}
  }
  ListBookModel.find(filter, select)
    .then(doc => {
      res.json(doc)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET LIST
router.get('/api/list-book', (req, res) => {
  let filter = {};
  let sort = {updated_at : -1};
  let limit = 32;
  let page = 0;
  if(req.query.book_hot) {
    let today = new Date();
    let now = new Date();
    let last_Week = new Date(now.setDate(now.getDate() - 7))
      filter = {
        updated_at : {$gte:last_Week, $lte:today}
      }
    limit = 15;
    sort = {read : -1};
  }
  if(req.query.book_appoint) {
    filter = {book_appoint : true}
    limit = 15;
    sort = {read : -1};
  }
  let select = {
    name : 1, cover: 1, read: 1, last_chapter: 1, folow: 1, book_id: 1,
  }
  if(req.query.filter) {
    page = parseInt(req.query.filter) -1
  }
  let respon = {};
  ListBookModel.count()
      .then(count => {
        respon['total'] = count
      })
  ListBookModel.find(filter,select).limit(limit).skip(limit*page).sort(sort)
    .then(doc => {
      respon['items'] = doc
      res.json(respon)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// GET LIST TOPIC
router.get('/api/list-topic', (req, res) => {
  let filter = {};
  let sort = {};
  let limit = 48;
  let page = 0;
  let today = new Date();
  let now = new Date();
  switch(req.query.filter){
    case 'read':
      sort = {read : -1};
      break;
    case 'top-thang':
      let last_month = new Date(now.setMonth(now.getMonth() - 1));
      sort = {read : -1};
      filter = {
        updated_at : {$gte:last_month, $lte:today}
      }
      break;
    case 'top-tuan':
      let last_Week = new Date(now.setDate(now.getDate() - 7))
      sort = {read : -1};
      filter = {
        updated_at : {$gte:last_Week, $lte:today}
      }
      break;
    case 'top-full':
      sort = {read : -1};
      filter = {
        status : 2
      }
      break;
    case 'top-yeu-thich':
      sort = {folow : -1};
      break;
    case 'top-moi-cap-nhat':
      sort = {updated_at : -1, read: -1};
      break;
    

  }
  
  let select = {
    name : 1, cover: 1, read: 1, last_chapter: 1, folow: 1, book_id: 1, book_appoint: 1, book_hot: 1,
  }
  if(req.query.filter) {
    page = parseInt(req.query.filter) -1
  }
  let respon = {};
  ListBookModel.count()
      .then(count => {
        respon['total'] = count
      })
  ListBookModel.find(filter,select).limit(limit).skip(limit*page).sort(sort)
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
  if(!req.body.obj.book_id) {
    return res.status(400).send('Missing URL parameter: book_id')
  }
  ListBookModel.findOneAndUpdate({
    book_id: req.body.obj.book_id
  }, req.body.obj, {
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