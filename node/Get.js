const http = require('http');
const logger = require('./utils/log');
const querystring = require('querystring')
const https = require('https')
const server = http.createServer((req,res)=>{
   https.get('https://www.xiaomiyoupin.com/mtop/market/cat/list',(result)=>{
       let data = ''
       result.on('data',(cheuk)=>{
            data += cheuk
       })
       result.on('end',()=>{
           res.writeHead(200,{
               'content-type':'application/json;charset=utf-8'
           })
           res.write(data)
           res.end()
       })
   })
})
server.listen(3381,()=>{
    console.log('启动成功');
})