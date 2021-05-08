const mongoose = require('mongoose')
//schema 对象
let tempSchema = new mongoose.Schema({
  animalsName:{type:String,required:true},
  number:{type:String,required:true},
  id:{type:String,required:true}
})

let animal = mongoose.model('animals',tempSchema)

module.exports = animal