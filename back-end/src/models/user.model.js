let mongoose = require('mongoose')

let UsersSchema = new mongoose.Schema({
  user_id: {
    type: Number,
    required: true,
    unique: true
  },
  password: {type: String, default: null},
  username: {type: String, default: null},
})

module.exports = mongoose.model('Users', UsersSchema)
