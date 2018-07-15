let express = require('express');
let path = require('path');

let app = express();
//设置路由的路径
let user = require(path.join(__dirname,'/router/user.js'));

//挂载中间件
app.use('/user',user);
app.listen(80,'127.0.0.1',()=>{
    console.log('开启')
})