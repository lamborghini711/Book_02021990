const listBooksController = require('./../controllers/list-books.controller.sever')
const multipart = require('connect-multiparty')
const multipartWare = multipart()

module.exports = (router) => {
  router
        .router('/api/create-book')
        .post(listBooksController.createBook);
  
}