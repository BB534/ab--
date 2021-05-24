const http = require('http');
const logger = require('./utils/log');
const querystring = require('querystring')
const server = http.createServer((req,res)=>{
    // logger.debug(res)
    let data = ''
    req.on('data',(result)=>{
        data += result
    })
    req.on('end',()=>{
        res.writeHead(200,{
            'content-type':'application/json;charset=utf-8'
        })
        res.write(JSON.stringify(querystring.parse(data)))
        res.end()
    })
    
})
server.listen(3381,()=>{
    console.log('启动成功');
})