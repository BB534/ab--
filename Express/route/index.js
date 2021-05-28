const express = require('express')

const indexRoute = express.Router();
const { list } = require('../controller/index')

indexRoute.get('/',list)

indexRoute.get('/index',(req,res)=>{
  res.send('欢迎来到首页')
})

module.exports = indexRoute