const mongoose = require('mongoose')
//schema 对象
let tempSchema = new mongoose.Schema({
  temperature:{type:String,required:true},
  humidity:{type:String,required:true},
  time:{type:String,required:true},
})

let temp = mongoose.model('temperatures',tempSchema)

module.exports = temp
  