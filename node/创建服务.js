const url = require('url');
const log4js = require('log4js');
const querystring = require('querystring');
// 配置日志
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
let UrlString = 'http://www.baidu.com:433/path?id=2#tag';

let urlObj = {
    protocol: 'http:',
    slashes: true,    
    auth: null,       
    host: 'www.baidu.com:433',
    port: '433',
    hostname: 'www.baidu.com',
    hash: '#tag',
    search: '?id=2',
    query: 'id=2',
    pathname: '/path',
    path: '/path?id=2',
    href: 'http://www.baidu.com:433/path?id=2#tag'
  }

let data = new URLSearchParams(url.parse(UrlString).search);

const queryobj = {id:2,name:'tongyi',from:'北京'};
const query = 'id=2&name=tongyi&from=北京';
const query2 = 'id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC';
const query3 = 'id:2/name:tong/from:北京';
let newobj = querystring.stringify(queryobj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string)
    }
})

console.log(querystring.stringify(queryobj));