const express = require('express')
const router = express.Router()
const temp = require('../db/model/tempModel')

/**
 * @api {post} /temperature/add 添加信息
 * @apiName  add
 * @apiGroup temp
 * @apiParam {String} temperature  温度。
 * @apiParam {String} humidity  湿度。
 * @apiParam {String} time  时间戳。
 */
router.post('/add', (req, res) => {
  let {
    temperature,
    humidity,
    time
  } = req.body

  
      temp.insertMany([{
       temperature,
       humidity,
       time
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



/**
 * @api {get} /temperature/getInfo 查询全部温湿度信息
 * @apiName  getInfo
 * @apiGroup temp

 */

router.get('/getInfo', (req, res) => {
 
  temp.find().then(data => {
    console.log(data);
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


module.exports = router
