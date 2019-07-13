let express = require('express')
let app = express()
// let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let bookRouter = require('./routes/list-book.server.router')
let path = require('path')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
var cors = require('cors')

app.use(cors())

mongoose.connect(`mongodb://localhost/truyen_comic`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
  next()
})

// app.use(personRoute)
app.use(customerRoute)
app.use(bookRouter)
app.use(express.static('public'))

// view engine setup
app.use('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Headers', 'content-type');
  // req.connection.setTimeout( 1000 * 60 * 10 ); 
  next();
});

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
  res.status(404).send('We think you are lost!')
})

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))