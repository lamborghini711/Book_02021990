let mongoose = require('mongoose')

let ListBookSchema = new mongoose.Schema(
  {
    book_id: {
      type: Number,
      required: true,
      unique: true
    },
    book_appoint: {type: Boolean, default: false},
    book_hot: {type: Boolean, default: false},
    translate: { type: String, default: null },
    name: { type: String, default: null },
    another_name: { type: String, default: null },
    created_at: { type: Date, default: null },
    full_text_search: {type: String, default:null},
    cover : { type: String, default: null },
    read: { type: Number, default: 0 },
    rate: { type: Number, default: 0 },
    rank: { type: Number, default: 0 },
    tag: [],
    country: { type: String, default: null },
    year: { type: Number, default: 0 },
    last_chapter: { type: Number, default: 0 },
    updated_at: { type: Date, default: null },
    content: { type: String, default: null },
    author: { type: String, default: null },
    status: { type: Number, default: 0 },
    folow: { type: Number, default: 0 },
    data_SV1: [
      {
        created_at: {type: Date, default: null},
        id_chapter: {type: Number, default: 0},
        chapter_number: {type: Number, default: 0},
        chapter_name: {type: String, default: null},
        image: [
          {
            src: {type: String, default: ""},
            position: {type: Number, default: 0},
            id_image: {type: Number, default: 0}
          }
        ]
      }
    ],
    data_SV2: [
      {
        created_at: {type: Date, default: null},
        id_chapter: {type: Number, default: 0},
        chapter_number: {type: Number, default: 0},
        chapter_name: {type: String, default: null},
        image: [
          {
            src: {type: String, default: ""},
            position: {type: Number, default: 0},
            id_image: {type: Number, default: 0}
          }
        ]
      }
    ]
  }
)

module.exports = mongoose.model('Book', ListBookSchema)
