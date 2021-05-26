const http = require('http');
const https = require('https')
const cheerio = require('cheerio');
const logger = require('./utils/log')
const fs = require('fs')
const path = require('path')
let file = path.resolve(__dirname,'./file.txt')
function getDom(data){
  const $ = cheerio.load(data)
  $('.list dl dd').each((index,el)=>{
    console.log(index);
  })
}
const server = http.createServer((req,res)=>{
  let data = ''
  https.get('https://www.xbiquge.la/10/10489/',(result)=>{
    result.on('data',(cheuk)=>{
      data += cheuk
    })

    result.on('end',()=>{
      getDom(data)
    })
  })
})

server.listen(3381,()=>{
  console.log('localhost:3381');
})