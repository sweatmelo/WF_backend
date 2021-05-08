const mongoose = require('mongoose')
//schema 对象
let tempSchema = new mongoose.Schema({
  goodsName:{type:String,required:true},
  number:{type:String,required:true},
})

let temp = mongoose.model('goods',tempSchema)

module.exports = temp