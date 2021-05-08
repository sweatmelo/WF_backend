const express = require('express')
const router = express.Router()
const sick = require('../db/model/sickInfoModel')
const animal = require('../db/model/animalModel')
//const { send } = require('../../Mogoose/utils/mail')

/**
 * @api {post} /sickInfo/insert 添加疫情信息
 * @apiName  add
 * @apiGroup sickInfo
 * @apiParam {String} temperature  温度。
 * @apiParam {Boolean} health 健康与否 。
 * @apiParam {String} id   唯一表示编号。
 */

router.post('/insert',(req,res)=>{
  let {
    temperature,
    health,
    id
  } = req.body
  if(typeof health != 'boolean'){
    res.send({
      err:'3',
      msg:参数错误
    })
  }
  animal.find({id}).then(data=>{
    if(data.length<1) {
      res.send({
        err:1,
        msg:'不存在当前畜禽编号'
      })
    } else {
      sick.insertMany([{
        temperature,
        health,
        id
       }],(err,docs)=>{
         if(err) {
           res.send({
           err: -1,
           msg: '添加失败，请联系管理员'
         })
         } 
         else
         res.send({
           err: 0,
           msg: '添加成功'
         })
       })
    }
  })
})

module.exports = router