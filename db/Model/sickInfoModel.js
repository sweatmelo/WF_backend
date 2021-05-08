const mongoose = require('mongoose')
//schema 对象
let tempSchema = new mongoose.Schema({
  health:{type:String,required:true},
  temperature:{type:String,required:true},
  id:{type:String,required:true},
})

let sick = mongoose.model('SickInfos',tempSchema)

module.exports = sick