const express = require('express')
const router = express.Router()
const animal = require('../db/model/animalModel')
/**
 * @api {get} /animal/getInfo 查询全部原料信息
 * @apiName  getInfo
 * @apiGroup temp

 */
router.get('/getInfo',(req,res)=>{
  animal.find().then(data=>{
    if(data.length == 0 ){
      res.send({
        err: '-2',
        msg: '暂无数据'
      })
    }else {
      res.send({
        err: 0,
        msg: '查询成功',
        data: data
      })
    }
  }).catch(err => {
    res.send({
      err: -1,
      msg: '查询失败'
    })
  })
})

/**
 * @api {post} /animal/add 添加原料信息
 * @apiName  add
 * @apiGroup temp
 * @apiParam {String} animalName  动物名称。
 * @apiParam {String} number  数量。
 * @apiParam {String} id 唯一标识。不可重复
 */
router.post('/add', (req, res) => {
  let {
    animalsName,
    number,
    id
  } = req.body

  animal.find({id}).then(data=>{
    if(data.length>0) {
      res.send({
        err: 1,
        msg: '当前id已重复'
      })
    }else {
      animal.insertMany([{
        animalsName,
        number,
        id
       }],(err,docs)=>{
         if(err) {
           res.send({
           err: -1,
           msg: err
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