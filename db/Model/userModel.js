const mongoose = require('mongoose')
let schema = new mongoose.Schema({
  password:{type:String,required:true},
  username:{type:String,required:true}
})

let user = mongoose.model('users',schema)

module.exports = user