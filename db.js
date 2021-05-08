const mongoose = require('mongoose')
const express = require('express')
const db = require('./db/connect')
const request = require('request') //服务器请求的中间件 
const multer = require('multer')
const userRouter = require('./router/userRouter.js')
//const fileRouter = require('./router/fileRouter')
const goodRouter = require('./router/goodRouter')
const tempRouter = require('./router/tempRouter')
const aninmalRouter = require('./router/animalRouter')
const sickRouter = require('./router/sickRouter')
//const userRouter = require('./router/userRouter')
const axios =require('axios')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()
//const mail = require('./utils/mail')
/**
 * 解析请求体
 */

 /**
  * 设置cors实现跨域
  */
app.all('*',(req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Headers',"content-type")
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET')
  if(req.method.toLowerCase() == 'options'){
    res.send(200)
  }else {
    next()
  }
})

/**
 * 代理实现跨域
 */
app.get('/cors',(req,res)=>{
  request('http://www.baidu.com',(err,response,body)=>{
    if(!err) {
      res.send(body)
    } 
  })
})
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

app.use('/user', userRouter)
app.use('/good',goodRouter)
//app.use('/img',fileRouter)
app.use('/temperature',tempRouter)
app.use('/animal',aninmalRouter)
app.use('/sickInfo',sickRouter)
app.use('/user',userRouter)
// app.use(mailrouter)
app.use('/public',express.static(path.join(__dirname,'./staticSrc')))
app.listen(4000, () => {
  console.log('service start')
})

