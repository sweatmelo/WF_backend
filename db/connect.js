const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test',{useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection
db.on('error',console.error.bind(console,'connection error'))
db.once('open',()=>{
  console.log('database connected')
})

module.exports = db