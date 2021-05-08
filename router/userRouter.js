const express = require('express')
const router = express.Router()
const user = require('../db/model/userModel')
//const {codes} = require('../router/useMail')

/**
 * @api {post} /user/login 登录
* @apiName login
* @apiGroup user
* @apiParam {String} username用户名。
* @apiParam {String} password密码。


*/ 
router.post('/login', (req, res) => {
  let {
    password,
    username
  } = req.body

  if (!password || !username) {
    res.send({
      err: -1,
      msg: '参数为空！'
    })
    return
  }
  
  user.find({username}).then(data=>{
    if(data[0].password == password) {
      res.send({
        err:'0',
        msg:'登录成功',
        suceess:'true'
      })
    } else {
      res.send({
        err:-1,
        msg:'用户名或密码错误',
        suceess:'false'
      })
    }
  })
})


/**
 * @api {post} /user/update  更改密码
* @apiName update
* @apiGroup user
* @apiParam {String} username用户名。
* @apiParam {String} password密码。
* @apiParam {String} newPassword新密码。
* @apiParam {String} rePassword重复密码。


*/ 
router.post('/update',(req,res)=>{
  let {username,password,newPassword,rePassword} = req.body
  if(newPassword !== rePassword) {
    res.send({
      err:-2,
      msg:'两次密码不一致请确认'
    })
    return
  }
  user.find({username}).then(data=>{
    if(data[0].password == password) {
      console.log(data);
     user.updateOne({username,password},{username,password:newPassword}).then(data=>{
       if(data.n==1) {
         res.send({ 
           err:0,
           success:true,
           msg:'密码更改成功请重新登录'
         })
       }
     }).catch(err=>{
       res.send({
         err:-2,
         msg:err
       })
     })
    } else {
      res.send({
        err:-1,
        msg:'密码错误',
        suceess:'false'
      })
    }
  })

})

module.exports = router
