const express = require('express')
const router = express.Router()
const good = require('../db/model/goodModel')
/**
 * @api {get} /good/getInfo 查询全部原料信息
 * @apiName  getInfo
 * @apiGroup good

 */
router.get('/getInfo',(req,res)=>{
  good.find().then(data=>{
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
 * @api {post} /good/add 添加原料信息
 * @apiName  add
 * @apiGroup good
 * @apiParam {String} goodsName  原料名称。
 * @apiParam {String} number  数量。
 */
router.post('/add', (req, res) => {
  let {
    goodsName,
    number
  } = req.body

  
      good.insertMany([{
       goodsName,
       number
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
    })

    module.exports = router