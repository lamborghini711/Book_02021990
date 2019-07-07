// 1.require mongoose
const mongoose = require('mongoose')
// 2. connect
mongoose.connect('mongodb://localhost/truyen_comic')
// 3.create Schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// })
// 4.create Model
// const user = mongoose.model('user', userSchema)
// 5.CRUD
// user.create({
//   name: 'ty',
//   age: 15
// })