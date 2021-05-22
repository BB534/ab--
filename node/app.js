const http = require('http');
const logger = require('./utils/log');
const server = http.createServer((req,res)=>{
    logger.info("111")
})

server.listen(8080,()=>{
    console.log('启动成功');
})