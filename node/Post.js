const http = require('http')
const https = require('https')
const querystring = require('querystring')
const logger = require('./utils/log')
let data = JSON.stringify({
  accesstoken: 'Buy the milk'
})
let options = {
  protocol:'https:',
  hostname: 'cnodejs.org',
  port: 443,
  path: '/api/v1/message/mark_all',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const server = http.createServer((req,res)=>{
  const request = https.request(options,(result)=>{
    result.on('data',(d)=>{
      logger.debug(d);
    })
  })
  request.write(data)
  request.end()

  res.end()
})

server.listen(3381,()=>{
  console.log('启动成功');
})