# 黑马进阶记录

## **各种事件**

```apl
onclick
onblur：失去焦点
onfocus 得到焦点
onkeydown 按键盘
onkeyup 松开键盘
onkepress 按住键盘
onmousedown 按下鼠标
onmouseup 松开鼠标
onmouseover 把鼠标放到上面
ommousemove 移动鼠标
onmouseout 移开鼠标
onload ：页面加载
onchange：改变
onsubmit ：表单提交。
```

## 加载动画
```asciiarmor
LottieFiles
```

## ES6类的继承

```asciiarmor
super()  //继承父类的方法,但是必须在所有this之前使用
```

## ES5构造函数
```asciiarmor
原型链 ___proto__对象都有原型链
Obj.prototype.方法名 给构造函添加方法 但是this指向改变了,所以需要使用constructor.对象 指回函数
```

## 内置对象
```clike
数组
    forEach() 遍历数组
    map() 返回一个新的数组，当要遍历的数组中的元素满足提供的条件时就会追加到新的数组中
    fitter() 返回一个新数组,包含通过所有条件的元素
    some() 测试数组中是不是有一个元素通过了条件，返回的是布尔值
    every() 测试一个数组内的所有元素是不是都能通过元素,返回布尔值

字符串
    trim() 去除两边的空白字符
对象
    Object.keys() 类似for in 循环，返回的是属性名组成的数据
    Object.defineProperty(obj,属性名){
        value:设置属性的值
        writable:是否可以重写 true || false
        enumerable:是否可以被枚举 false || true
        configurable:是否可以被删除或修改特性 false || true
    }重新编辑对象
```

## 改变函数内部this指向问题
```apl
obj.call(obj,value)
obj.apply(obj,[]) 两者都会立即调用函数,并且改变this指向
obj.bind(obj.value) 不会调用函数，改变内部this指向
```
## 高级函数
```apl
>定义:传入参数带有函数，或返回参数带有函数就为高级函数
>例如当我们想某个div移动到指定距离后，执行其他函数，这时就可以传入一个函数来完成剩余的函数
```
## 闭包
```js
定义:函数,局部变量可以被其他作用域访问即为闭包，用于变量作用域的延伸
例子A：利用闭包的方式得到当前小li的索引号
for(let i = 0; i < lis.length; i++){
//利用for循环创建了4个立即执行函数
//立即执行函数也称为小闭包，因为立即执行函数里面的仁和一个函数都可以使用它的i这个变量
(function(i){
    lis[i].onclick = function(){
        console.log(i)
       }
    })(i);
}
例子B:闭包应用-3秒钟滞后于,打印所有li元素的内容

let lis = document.querySelector('.nav').querySelector('li');
for(let i = 0;i < lis.length; i++){
    (function(i){
        setTimeout(function(){
            console.log(lis[i].innerHTML)
        },3000)
    })(i);
}
```
> 总结:
> 	1.闭包是什么? 闭包是一个函数(一个作用域内可以访问另外一个函数局部变量的函数)
> 	2.闭包的作用是什么? 延伸变量的作用范围

## 递归
	>定义:如果一个函数在内部可以调用函数本身,那么这个函数就是递归函数,递归函数得有条件退出。不然就是死循环

## 深拷贝与浅拷贝
```js
    obj.assign() 只拷贝第一次,层次内部则会引用原有内存地址
    利用递归来实现深拷贝函数:
    function deepCopy(newobj,obj){
        for(let key in obj){
            let item = obj[key];
            if(item instanceof Array){
                newobj[key] = [];
                deepCopy(newobj[key],item)
            }else if(item instanceof Object){
                newobj[key] = {};
                deepCopy(newobj[key],item)
            }else{
                newobj[key] = item;
            }
        }
    }
```

## 正则表达式
```apl
创建 let regExp = /123/
检测方法 regExp.test(检测内容) 
限定符 ^ 开头 $ 结尾 精确匹配
字符类 [] 包含,如果加了限定符就是多选1
量词符
*>=0 可以出现0次或者很多次
+>=1 可以出现一次或者很多次
? 1||0 相当于或
{n,n} 区间

量词是设定某个模式出现的次数

[] 多选1
{} 两次符,模式可以重复n次，如果紧接字符，则最后一个重复 如 abc{3} c重复三次
() 优先级 (abc){3} abc重复三次,权重最高

预定义类
\d 匹配0-9 任一数字相当于[0-9]
\D 取反不包含0-9的数字
\w 匹配任意字母、数字、下划线、相当于[A-Za-z0-9]
\W 取反
\s 匹配空格(相当于换行符，制表符，空格符 )[\t\r\n\v\f]
\S 匹配非空格字符串

正则替换
replace(正则表达式/替换字符,字符串)
g：全局匹配
i：忽略大小写
gi：全局匹配忽略大小写
```

## 解构赋值
```apl
数组解构 [a,b,c] = [1,2,3]；a = 1,b=2,c=3; 一对一
对象解构:{name,age} = {name:'张三',age:18} 
对象解构2: {name:myName,age:myAge} = {name:'张三',age:18}  变量名为myName myAge
```

## 箭头函数
```apl
ler fn = (参数) => {//函数体} 箭头函数没有this 一边用变量名来赋值;
```

## 扩展运算符
```apl
1.可以将数组拆分成以逗号分割的参数序列

    {
    let ary = ["a","b","b"]
    console.log(...ary)  输出abc
    }

2.扩展运算符可以用于合并数组,

    {
    let ary1 = [1,2,3]
    let ary2 = [4,5,6]
    let ary3 = [...ary1,...ary2]
    console.log(ary3) 输出[1,2,3,4,5,6]
    }

3.ary1. push(...ary2) ； 使用扩展运算符向数组中追加另一个数组

    {
    let div = document.getElementsByTagName('div')
    let divAry  = [...div];
    }
```


## Array的扩展方法 
```apl
2.Array[idnex]访问数组元素
3. forEach遍历数组
4. push 添加元素到数组末尾
5. pop删除数组末尾的元素
6. unshift添加元素到数组的头部
7. shift 删除数组头部的元素
8. indeOf 通过某个元素返回数组中的索引
9. splice 从一个人索引位置删除多个元素,传入第三个参数为替换
10.slice 克隆数组 ,传入参数为截取数组
11.数组长度 length
12.from将伪数组，或对象转为数组,就可以调用一些数组的方法
13.isArray() 判断某个变量是否是一个数组对象
13.Array.of() 将一组参数转为数组
14.14.Array.join() 链接所有数组元素转为字符串
15.find() 找到第一个满足条件的元素
    let ary = [{id:1,name:'张三'},{id:2,name:'李四'}]
    let target  = ary.find((item,index) => item.id == 2);
16.findindex() 用于找到第一个符合条件的数组成员的位置索引，如果没找到放回-1
    let ary = [1,5,10,15];
    let index = ary.findindex((value,index) => value > 9)
18.includes() 用于查找某个数组中是否包含给定的值返回布尔值
    [1,2,3] .includes(2) // true
```

## String的扩展方法
```apl
``  模板字符串 ${}解析变量，并且可以换行，并且可以调用函数，返回函数执行结果
startsWith():判断参数字符串是否在原字符串的头部，返回布尔值
endsWith()：判断参数字符串是否在原字符串的尾部，返回布尔值
repeat() 将字符串重复n次，返回一个新的字符串
```

## Set数据结构
```apl
类似于数组，但是成员的值都是唯一的，没有重复的值。(可以用来做数组去重)
const s = new Set([1,2,3,4,4]); // 可以接收数组
s.clear() //清空所有值方法
s.add("b"); add方法题添加值 返回set本身
s.delete(1); dlete方法删除值,参数为value
s.has(1); has方法根据value判断值是否存在,返回值true,false
注意：
可以使用forEach方法遍历进行取值
Set方法之间可以使用链式操作 s.add(1).add(2).add(3)
```
## Node
```apl
exports 对模块成员变量导出
module.exports(obj) 模块成员导出
两者都是导出，但是当内初引用地址指向不同时，最终导出结果已module.exports为准
require 对模块成员导入 
```

## Ajax
```yacas
创建{let xhr = new XMLHttpRequest()}
设置请求方式{xhr.open(方式,url)}
发送请求xhr.send()
接收响应 xhr.onload = function(){
    xhr.responseText //接收返回数
}
```
### get请求参数
```js
let parse = 'name=' + name.value + '&pwd='+pwd.value; 
xhr.open('get','/get?'+parse ); /需要自己拼接
```

### post请求参数
```apl
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded') 设置请求报文
xhr.send(参数)apl
```
### 请求参数的格式apl
```apl
application/x-www-form-urlencoded
name=zhangsan&age=20&sex=男
2.application/json
{name:'zhangsan',age:'20',sex:'男'}
在传递jsons数据格式时，还要将json对象转换为字符串参数
注意:服务器端需引用body-parser模块,并且设置
bodyParser.json()来解析json
```
### Ajax状态码
```js
共有五个
0:请求已经初始化
1.请求建立
2.请求发送
3.响应完成，但只是部分数据
4.响应完成
xhr.readyState 获取ajax状态码
xhr.onreadyStateChange() 监听状态码改变方法
必须用于xhr.send()方法前
```
### 错误处理：
```js
xhr.status 获取http状态码
400:返回结果不是预期的结果
404:请求地址不存在
500：服务器端能接收到请求，服务器端返回500状态码
onerror事件网络中断，请求失败
xhr.onerror = function(){
    alert(‘网络错误，请检查’)
}
```
### 注意:
    IE低版本浏览器下,ajax存在严重的缓存,解决防范为每次请求的url参数不一样即可,所以可以在请求的url后面拼接一个随机参数。
### 封装Ajax函数
```js
function ajax(options){
            let defules = {
                type:'get',
                url: '',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                data:{},
                success:function(){},
                error:function(){},
            }
            Object.assign(defules,options);
            let xhr = new XMLHttpRequest();
            let parms = '';
            for (let key in defules.data) {
                parms += key + '=' + defules.data[key] + '&';
            }
            parms = parms.substring(0,parms.length-1);
            if(defules.type == 'get'){
                defules.url = defules.url + '?' + parms;
            }
            xhr.open(defules.type, defules.url);
            if(defules.type == 'post'){
                let contentType = defules.headers['Content-Type'];
                xhr.setRequestHeader('Content-Type', contentType);
                if(contentType == 'application/json'){
                    xhr.send(JSON.stringify(defules.data));
                }else{
                    xhr.send(parms);
                }
            }else{
                xhr.send();
            }
            xhr.onload = function(){
                let responseText = xhr.responseText;
                if(xhr.getResponseHeader('Content-type').includes('application/json')){
                    responseText = JSON.parse(responseText);
                }
                if(xhr.readyState = 4 && xhr.status == 200){
                    defules.success(responseText,xhr)
                }else{
                    defules.error(responseText,xhr)
                }
            }
       }
       ajax({
           type:'post',
           url:'/post',
           data:{name:'zhangsna',age:20},
           headers:{
               'Content-Type':'application/json',
           },
           success:function(data){
               console.log(data);
           },
           error(data,xhr){
               console.log(data);
               console.log(xhr);
           }
       })
```
### 三级联动
```apl
1.通过接口获取省份信息
2.后去下拉框元素
3.将返回的省份信息显示在下拉框中
4.为下拉框元素添加元素表单值改变事件(onchange)
5.当用户悬着省份时，根据省份id获取城市信息
6.当用户选择城市时，根据城市id获取县城信息
```
###  模板引擎:
```yacas
art-template
具体看官网文档,有使用说明
template.defaults.imports：开放模板变量
```
### FormData
```js
可以获取指定表单的所有表单，无需添加额外参数，支持异步上传，但是不支持get请求。
let formData = new formData（表单）
获取表单对象中的值
formData.get(name值) // 如果已有会覆盖
formData.set('key','value')
f.append('sex','男') // 追加，并且保留两个值
formData.delete(key)
服务端接收:使用模块(formidable)
const form = new formidable.IncomingForm();
form.parse(req,(err,fields,files)=>{
    res.send(fields);
})
```

### 二进制文件上传
```js
file.onchange = function(){
    let form = new FormData();
    form.append('attName',this.files[0]);
    let xhr = new XMLHttpReuqest();
    xhr.open('post',url);
    xhr.send(form);
}
```
### 文件上传进度展示
```js
file.onchange =function(){
    xhr.upload.onprogress = function(ev){
    bar.style.width = (ev.loaded / ev.total) * 100 + '%'
    }
}
```

### JSONP代码同源
```js
利用script的请求不同源的性质，动态创建标签设置src为请求地址，后端返回字符串形式的函数,客户端就会解析执行函数,前提是需要在请求的script之前创建全局函数
function jsonp(options){
    let script = document.createElement('script');
    let fnNames = 'myJson' +  			 		  Math.random().toString().replace('.','') + new Date().getTime();
    window[fnNames] = options.success;
    let  parms = '';
    for(let key in options.data){
       parms += '&' + key + '=' +  options.data[key];
    }
    script.src = options.url + '?callback=' + fnNames + parms;
    document.body.appendChild(script);
    script.onload = function(){
        document.body.removeChild(script);
    }
}
```

### CORS跨域资源共享 跨域资源共享
```yacas
在服务端设置响应头header:
允许那些客户端访问:
'Access-Control-Allow-Origin':'*'，
允许客户端的那些请求方式访问:
'Access-Control-Allow-Methods','get,post'
服务端解决方案
利用服务端请求，再把请求结果返回客户端
利用模块 request
```

### Cookie：
```yacas
客户端设置:
withCredentials:true //允许跨域携带cookie
服务端设置:
Access-Control-Allow-Credentials:true //允许客户端请求时携带cookie
```
### $.ajax()
```yacas
type
url
data
contentType
beforeSend://发送请求之前的一些操作
success
error
```

### 发送jsonp
```yacas
$.ajax({
url,
jsonp // 自定义函数名称参数
jsonpCallback //自定义调用的函数
dataType:'jsonp'
success:
})
```
### $.get()、$.post()
```js
发送get或post请求
$.get(url,form,function(){})
$.post(url,form,function(){})
```

## 例子

### Todo list

### 为todo数据库添加账号

- [ ] 使用mongo命令进入数据库

- [ ] 使用usse todo命令切换到todo数据库

- [ ] 使用db.createUser({user:'itcast',pwd:'itcast',roles:['readWrite']}) 创建数据库账号

- [ ] 使用exit命令退出数据库

- [ ] yarn init 项目初始化

- [ ] yarn add express 添加express依赖

  

  ```js
  let express = require('express')
  let app = express();
  let path = require('path')
  
  // 设置静态资源托管
  app.use(express.static(path.join(__dirname,'public'))
  
  app.get('/',(req,res)=>{
  res.send('欢迎')
  })
  
  app.listen(3000);
  console.log('启动成功')；
  ```



# Ajax全局事件

```js
// 加载开始事件 必须在document下监听
$(document).on('ajaxStart',function(){
    console.log('开始')
});
// 全局结束事件
$(dcoument).on('ajaxComplete',function(){
    console.log('结束')
})
```

# NProgress 请求进度条

```html
<link rel='stylesheet' href='nprogress.css' />
<script src='nprogress.js'></script>
```

```js
// 进度条开始运动
NProgress.start()
// 进度条结束运动
NProgress.done()
```

# RESTFUL 风格的API

- GET ： 获取数据
- POST：添加数据
- PUT：更新数据
- DELETE：删除数据

```js
  // 获取某一个用户具体信息的路由
  app.get('/users/:id',(req,res)=>{
      const id = req.params.id
      res.send(`当前我们是在获取id为${id}用户信息`);
  })
```

```js
// 删除某个用户
app.delete('/users/:id',(req,res)=>{
    const id = req.params.id
    res.send(`当前我们是在删除id为${id}用户信息`);
})
```

```js
// 修改某一个用户信息
app.put('/users/:id',(req,res)=>{
    const id = req.params.id
    res.send(`当前我们是在修改id为${id}用户信息`);
})
```

# XML

XML的全称是extensible markup language,代表可扩展标记语言，它的作用是传输和存储数据。

```xml
// 保存数据 标签都是自己定的
<students>
    <student>
        <sid>001</sid>
        <name>张三</name>
    </student>
    <student>
        <sid>002</sid>
        <name>王二丫</name>
    </student>
</students>
```

XML DOM 是w3c组织定义的一套操作XML文档对象的API。浏览器会将XML文档解析成文档对象模型

```js
var btn = document.getElementById('btn')
var container = document.getElementById('container')

btn.onclick = function(){
    var xhr = new XMLHttpRequest();
    xhr.open('get','/xml');
    xhr.send();
    xhr.onload = function(){
        let data = xhr.responseXML; // 返回dom文档然后使用dom方法就可以拿大炮数据
        let res = data.getElementsByTagName('title');
        res[0] // 获取数据
    }
}
```

# GIT

```yacas
Git是一个版本管理控制系统（缩写vcs），它可以在任何时间点,将文档的状态作为更新记录保存起来，也可以在任何时间点，将更新记录恢复回来。
```

## 使用前配置

在使用git前，需要告诉git你是谁,在向git仓库提交时需要用到

### 1.配置提交人姓名:

   ```yacas
   git config --global user.name 提交人姓名
   ```

### 2.配置提交人邮箱:

```yacas
git config --global user.email 提交人邮箱
```

### 3.查看git配置信息:

```yacas
git config --list
```

### 注意

​	1.如果要对配置信息进行修改,重复上述命令即可。

​	2.配置只需要执行一次

## 提交步骤

### 1.初始化git仓库

```yacas
git init
```

### 2.查看文件状态

```yacas
git status
```

### 3.文件列表 追踪文件

```yacas
git add
git add . // 将目录中的文件全部添加到暂存区
```

### 4.提交信息，向仓库中提交代码

```yacas
git commit -m 需要提交的信息
```

### 5.查看提交记录

```yacas
git log
```

## 恢复记录

### 1.用暂存区中的文件覆盖工作目录中的文件

```yacas
git checkout
```

### 2.将文件从暂存区中删除

```yacas
git rm --cached
```

### 3.将git仓库中指定的更新记录恢复出来,并且覆盖暂存区和工作目录

```yacas
git rest --hard 之前提交的ID
```

## GIT分支

### 1.查看分支

```yacas
git branch
```

### 2.创建分支

```yacas
git branch 分支名称
```

### 3.切换分支

```yacas
git checkout 分支名称
```

### 4.合并分支

```yacas
git merge 来源分支
```

### 5.删除分支 (分支被合并后才允许被删除) (-D 强制删除)

```yacas
git branch -d 分支名称
```

## 暂时保存更改

在git中，可以暂时提取分支上所有的改动并储存,让开发人员得到一个干净的工作副本，临时转向其他工作

使用场景：分支临时切换

### 1.存储临时改动

```yacas
git stash
```

### 2.恢复改动:

```yacas
git stash pop
```

# Github

- A在自己的计算机中创建本地仓库
- A在github中创建远程仓库
- A将本地仓库推送到远程仓库
- B克隆远程仓库到本地进行开发
- B将本地仓库中开发的内容推送到远程仓库
- A将远程仓库中的最新内容拉取到本地

1.推送远程仓库 HTTPS协议的

```yacas
git push 仓库地址 分支名称
```

```yacas
git push 仓库地址别名 分支名称
```

```yacas
git push -u 仓库地址别名 分支名称   // -u记住已送地址及分支，下次推送只需要输入git push即可
```

```yacas
git remote add 仓库地址别名 远程仓库地址 // 给仓库地址取别名
```

2.拉取仓库最新数据

```yacas
git pull 仓库地址 分支名称
```



## 第三人进行克隆

```yacas
git clone 仓库地址
```

## 解决冲突

在多人同时开发一个项目时,如果两个人修改了同一个文件的同一个地方,就会发生冲突。需要人为解决

1.先拉取仓库中的最新版本拉取到本地

2.删除多余的内容，重新提交

## 跨团队协作

1.fork仓库

2.将仓库克隆到本地进行修改

3.推送远程仓库

4.发起 pull reqest

5.原仓库作者审核

6.原作者合并代码

## ssh免登录

1.生成密匙 一路回车 (存储C盘默认用户.ssh文件夹内)

```yacas
ssh-keygen
```

## 忽略清单

不需要被git管理的文件名字添加到此文件中,在执行git命令时候，git就会忽略这些文件。

git忽略清单文件名称

```yacas
新建.gitignore 将不需要添加暂存区的文件名称写在里边即可
```

## 为仓库添加详细的说明

在项目根目录文件新建：readme.md 文件



# Node.js

## NVM 版本管理器

```js
nvm alias default // 设置默认版本
```

## NPM

```yacas
npm i --S // 生产环境
```

```yacas
npm i --D // 开发环境
```

```yacas
npm i --g // 全局安装
```

```yacas
npm i --production // 只装生产环境的包
```

```yacas
npm init -y // 初始化package.json  ^只锁定主版本号,~锁定三个版本，*最新版本，空锁定补丁
```

```yacas
npm view 包名 versions // 查看版本
```

```yacas
npm i 包名@版本号 // 安装指定版本
```

```yacas
npm outdated // 查看版本过期信息
```

```yacas
npm update // 更新版本
```

```yacas
npm cache clean --force // 清除缓存
```

```
process.env.npm_package_config_env // 访问package.json中自定义的字段
```

```
npm run // 运行自定义脚本
```


## npm 安装 git 上发布的包
```yacas
# 这样适合安装公司内部的git服务器上的项目
npm install git+https://git@github.com:lurongtao/gp-project.git

# 或者以ssh的方式
npm install git+ssh://git@github.com:lurongtao/gp-project.git
```

## NPM脚本

npm允许在package.json文件里面,使用scripts字段定义脚本

执行多个脚本，要清楚先后顺序，如果是并行执行可以使用&链接

```json
{
	"scripts":{
		"build":"node build.js"
	}
}
```

执行

```
npm run build
```



## cross-env 运行跨平台设置和使用环境变量的脚本

cross-env 使得您可以使用单个命令，而不必担心为平台正确设置或使用环境变量。这个迷你的包(cross-env)能够提供一个设置环境变量的 scripts，让你能够以 Unix 方式设置环境变量，然后在 Windows 上也能兼容运行。

```json
{
  "scripts": 
    {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  	}
}
```

在脚本中获取

```js
const node_env = process.env.NODE_ENV
// 取到production
```

## NRM 管理源

安装

```yacas
npm i nrm -g
```

使用

```yacas
nrm ls 
```

切换

```yacas
nrm use taobao
```

测试速度

```yacas
nrm test
```

## LOG4j 日志保持第三方模块

```js
const log4js = require('log4js');
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "debug" } }
});
const logger = log4js.getLogger("cheese");

module.exports = logger;
```



## 内置模块

### URL

#### url.parse 

```js
// 将字符串url解析为对象
const url = require('url');
const log4js = require('log4js');
// 配置日志
log4js.configure({
    appenders: { cheese: { type: "file", filename: "cheese.log" } },
    categories: { default: { appenders: ["cheese"], level: "error" } }
});
const logger = log4js.getLogger("cheese");
let UrlString = 'http://www.baidu.com:433/path?id=2#tag';

console.log(url.parse(UrlString));

```

打印结果

```json
{
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
```

#### url.format 

```js
将对象url转换为字符串
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
  console.log(url.format(urlObj));
```

解析结果

```
http://www.baidu.com:433/path?id=2#tag
```

#### url.resolve

```js
// 将url字符串截取
url.resolve('http://www.baidu.com'.'/one') // 'http://example.com/one'
url.resolve('http://www.baidu.com/a','/b') // http://www.baidu.com/b
url.resolve('http://www.baidu.com/a','../') // http://www.baidu.com
```

#### URLSearchParams

```js
let UrlString = 'http://www.baidu.com:433/path?id=2#tag';
console.log(data.get('id'));

//打印 2 解析参数
```

#### *querystring*

```js
const querystring = require('querystring');
const query = 'id=2&name=tongyi&from=北京';
// { id: '2', name: 'tongyi', from: '北京' }
console.log(querystring.parse(query)); // URl参数转换为对象

```

```js
//  { id: '2', name: 'tong', from: '北京' }
const query3 = 'id:2/name:tong/from:北京';
console.log(querystring.parse(query3,'/',':'));
```

```js
// id=2&name=tongyi&from=北京
const query2 = 'id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC'
console.log(querystring.unescape(query2)); //将编码解码
```

```js
//id%3D2%26name%3Dtongyi%26from%3D%E5%8C%97%E4%BA%AC
console.log(querystring.escape(query)); //将参数进行编码转换
```

```js
// id=2&name=tongyi&from=%E5%8C%97%E4%BA%AC
const queryobj = {id:2,name:'tongyi',from:'北京'};
console.log(querystring.stringify(queryobj));
```

```js
// id=2&name=tongyi&from=北京
const queryobj = {id:2,name:'tongyi',from:'北京'};
let newobj = querystring.stringify(queryobj,null,null,{
    encodeURIComponent(string){
        return querystring.unescape(string)
    }
})
console.log(newobj);
```

### HTTP

#### 创建服务器

```js
const http = require('http');
const server = http.createServer((req,res)=>{
    // 接收请求参数
    let url = req.url;
    // 写入前端数据
    res.write(url);
    // 结束
   	res.end()
})

// 监听
server.listen(8090,'localhost',()=>{
    console.log('localhost:8090')
})
```

#### 浏览器端调试node服务

```yacas
node --inspect --inspect-brk app.js
```

#### 接收数据

```js
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
```

#### 接口调试工具

```
insomnia
```

#### GET方法

```js
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
```

#### POST方法

```js
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
```

#### 爬虫  cheerio数据筛选

```js
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
```

### Event 事件对象 

```js
cosnt EventEmitter = require('events') //返回一个类
class myEventEmitter extends EventREmitter{}
const event = new myEventEmitter() // 创建

event.on('paly',(value)=>{
    console.log(value)
}) // 创建监听事件

evemt.emit('paly','阿逼'); // 调用 打印阿逼
```

### Fs 文件操作

#### mkdir 创建文件目录

```js
const fs = require('fs')
fs.mkdir('logo',(err)=>{
    if(err) thow err; // 异常抛出
    console.log('写入成功')
})
```

#### rename 修改文件目录

```js
const fs = require('fs')
fs.rename('./logo','./logos',(err)=>{
    if(err) thow err;
    console.log('文件名修改成功')
})
```

#### rmdir 删除文件目录

```js
const fs = require('fs')
fs.rmdir('./logos',(err)=>{
    if(err) thow err;
    console.log('删除成功')
})
```

#### readdir 读取文件目录

```js
const fs = require('fs')
fs.readdir('./logos',(err,data)=>{
    if(err) thow err;
    console.log(data)
})
```

#### writeFile 写入文件

```js
const fs = require('fs')
fs.writeFile('./logos/log.log','hell/nword',(err)=>{
    if(err) thow err;
    console.log('写入成功')
})
```

#### appendFile 修改文件(追加)

```js
const fs = require('fs')
fs.appendFile('./logos/log.log','!!!!',(err)=>{
    if(err) thow err;
    console.log('写入成功')
})
```

#### unlink 删除文件

```js
const fs = require('fs')
fs.unlink('./logos/log.log',(err)=>{
    if(err) thow err;
    console.log('删除成功')
})
```

#### readFile 读取文件

```js
const fs = require('fs')
fs.readFile('./logos/log.log',(err,data)=>{
    if(err) thow err;
    console.log(data)
})


fs.readFile('./logos/log.log','utf-8',(err,data)=>{
    if(err) thow err;
    console.log(data)
})

fs.readFile('./logos/log.log',(err,data)=>{
    if(err) thow err;
    console.log(data.toString())
})
```

#### 循环读取目录下文件

```js
function reaDir(dir){
  fs.readdir(dir,(err,content)=>{
    content.forEach((value,index)=>{
      if(value != 'node_modules'){
        let joinDir = `${dir}/${value}`;
        // 获取属性
        fs.stat(joinDir,(err,stats)=>{
          // 判断是否是文件夹
          if(stats.isDirectory()){
            reaDir(joinDir)
          }else{
            fs.readFile(joinDir,'utf-8',(err,data)=>{
              console.log(data);
            })
          }
        })
      }
    })
  })
}

reaDir('./')
```



## 1.文件写入(fs)

```js
// 引入文件模块
const fs = require('fs');
// 没有异步就需要错误回调
fs.writeFile('./logo','hello',(err,data)=>{
    if(err){
        
    }else{
        console.log('写入文件成功')
    }
})
```

## 2.进程管理(Process)

```js
function main(argv) {
  console.log(argv)
}

main(process.argv.slice(2))
}
```

运行

```js
node 2.3-process.js argv1 argv2
```

## 3.网络通讯

```js

```

