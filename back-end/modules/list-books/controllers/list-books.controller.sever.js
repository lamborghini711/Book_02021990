const listBooks = require('./../models/list-books.model.sever')

module.exports = {
  createBook: (req, res) => {
    let {text, title, claps, description} = req.body
    listBooks.create([
      {text: "sdsbssc"},
      {text: "dsacasdc"}
    ])
  }
}