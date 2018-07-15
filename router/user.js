//引入模块 和路由方法
let express = require('express');
let router = express.Router();

//挂载的路由
router.get('/goin',(req,res)=>{
    res.send('===登入页===')
})
router.get('/add',(req,res)=>{
    res.send('===新增页===')
})
router.get('/update',(req,res)=>{
    res.send('===修改页===')
})
router.get('/out',(req,res)=>{
    res.send('===登出页===')
})

//暴露出去
module.exports = router;
