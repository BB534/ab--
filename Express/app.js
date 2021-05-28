/**
 * auth abi
 * 基于SMVP模式开发
 */

const express = require('express')
const app = express()
// 前端路由
const indexRoute = require('./route/index')

app.use(express.json()) // 解析bodyjson字符串
app.use(express.urlencoded({ extended:true })) // application/x-www-form-urlencoded
// 拦截前端路由
app.use('/',indexRoute)



app.listen(3381,()=>{
  console.log('localhost:3381');
})