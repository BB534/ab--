

# 阅读须知

> 仅代表个人理解,详细参考联系下面链接:weary::weary::weary::weary::weary::weary::weary:
>
> https://code-learning-gamma.vercel.app

# DOM

```js
// id获取袁术
document.getElementById();
// 通过calss查找
document.getElementsByClassName()
// 通过name名称获取
dpcument.getElementsByName()
// 通过标签名获取
document.getElementsByTagName()
// 通过选择器获取
document.querySelector()
// 通过选择器获取全部
document.queySelectoAll()
// 获取指定元素所有的子元素
let div = document.querSelector('div')
div.children() // 获取到的是所有的子元素
div.childNodes()// 获取到的是所有的节点
// 获取第一个子元素
duv.firstChild()
div.firstElementChild()
// 获取最后一个子元素
div.lastchild()
div.fistElementChild()

// 获取子元素/父节点
div.parenElement
div.parentNode
// 相邻上一个节点/元素
div.previousSibling
div.previousElementSibling
// 获取相邻的下一个节点/元素
div.nextSibling
div.nextElementSibling

// 创建节点
document.createElement("span")
// 添加节点
document.appendChild() // 会添加到最后
// 插入节点
document.insertBefore(参数,参数2) // 天际到参数中参数2的前面
// 删除节点,只能通过父元素来删除
document.parentNode.removeChild(指定子元素)
// 克隆节点
document.cloneNode() //参数传true，表示子元素也克隆

/*
无论是创建还是查询出来的标签，系统都会将元素包装成一个对象返回给我们，
对象中包含了元素的属性
*/

// 获取元素属性
let div = document.querySelector('img')
div.src
div.getAttribute("alt") // 可以获取自定义属性
// 修改元素
div.title = "图片标题"
div.setAttribute("title","22") // 可以修改自定义属性
// 新增属性
div.setAttribute("it666","66666") // 存在修改，不存在新增
// 删除属性
div.removeAttribute("title")

// 获取元素内容
let div =  document.querySelector('div')
div.innerHTML // 包含标签
div.innerText // 不包含标签，去除空格
div.textContent // 不包含标签，去除空格
// 设置内容
div.innerHTML
div.innerText
div.textContent

// 设置元素样式 拥有-采用驼峰转换，添加的样式都是行内样式，会覆盖同名css
let div =  document.querySelector('div')
div.className = ''
div.style.width = '300px'
// 获取样式
div.style.width // 只能获取行内样式的值
window.getComputedStyle(div) // 获取全部

// 
```




# ES5

## 内置对象
```js
// 去除两边的空白字符
String.trim() 
// 定义常量
 Object.defineProperty(obj,属性名){
    value:设置属性的值
        writable:是否可以重写 true || false
            enumerable:是否可以被枚举 false || true
                configurable:是否可以被删除或修改特性 false || true
}
```

## 改变函数this指向
```js
obj.call(obj,value)
obj.apply(obj,[]) 两者都会立即调用函数,并且改变this指向
obj.bind(obj.value) 不会调用函数，改变内部this指向
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
>如果一个函数在内部可以调用函数本身,那么这个函数就是递归函数,递归函数得有条件退出。不然就是>循环

## ES5深拷贝浅拷贝
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
## Array的方法
```js
// 访问数组元素
Array[idnex]
//遍历数组
Array.forEach((index,value,arr)=>{})
// 添加元素到数组末尾,返回数组长度
Array.push()
// 删除数组末尾的元素 返回删除元素
Array.pop()
// 添加元素到数组的头部,返回数组长度
Array.unshift
// 删除数组头部的元素 返回删除元素
Array.shift
//通过某个元素返回数组中的索引 
indexOf
// 从一个人索引位置删除多个元素,传入第三个参数为替换
splice(下标起始位置,下标结束位置,'替换字符')
let res = arr.splice(1,3) 截取
let res = arr.splice(1,3,0) 替换
// 克隆数组 ,传入参数为截取数组
slice
//将伪数组，或对象转为数组,就可以调用一些数组的方法
from
// 判断某个变量是否是一个数组对象
isArray() 
// 将一组参数转为数组
Array.of()
// 链接所有数组元素转为字符串
Array.join() 
// 找到第一个满足条件的元素
let ary = [{id:1,name:'张三'},{id:2,name:'李四'}]
let target  = ary.find((item,index) => item.id == 2);
// 用于找到第一个符合条件的数组成员的位置索引，如果没找到放回-1
let ary = [1,5,10,15];
let index = ary.findindex((value,index) => value > 9)
//用于查找某个数组中是否包含给定的值返回布尔值 
[1,2,3] .includes(2) // true
```
# Es6+扩展
## let关键字
> - 没有变量提升，不会将变量挂载到windos下
> - 暂时性死区，不能在定义之前去使用更加安全
> - 块级作用域
> - 不重复

## const
> - es5之前定义常量

```javascript
Object.defineProperty(window,"PI",{
  value:3.14,
  writable:false
})
```
> - 块级作用域
> - 没有变量提升
> - 不能改变（内存地址不改变，内存中的内容可以改变）
> - 强制锁定浅层（Object.freeze(Object)）

## 解构赋值
> - 一种格式对变量进行赋值
> - 数组解构

```javascript
// 通过下标对应解构
let arr = [1,2,3]
let [a,b,c] = arr
console.log(a,b,c)

let arr2 = [1,2,3,[4,5,6]]
let [a,b,c,[d,e,f]] = arr2
```
> - 对象解构赋值

```javascript
// 通过key对应解构，所以交换位置无影响
let obj = {
  name:"zs",
  age:30
}
// let {name:uname,age:uage} = obj 起别名
let {name,age} = obj
```
> - 字符串解构赋值

```javascript
// 字符串的解构对饮数组的解构
let str = 'imooc'
let [a,b,c,d] = str
```
> - json赋值

```javascript
 let json = {"a":'hello',"b":'word'}
 let {a,b} = JSON.parse(json)
```
## 箭头函数
```apl
ler fn = (参数) => {//函数体} 箭头函数没有this 一边用变量名来赋值;
```
## 数组的遍历
```javascript
let arr = [1,2,3,4,5,6]
arr.map() //遍历数组元素,根据回调操作返回新的数组
arr.fitter() //遍历数组,返回过滤的数组
arr.some() //遍历数组,判断是否有符合条件的结果,返回布尔值
arr.every() //检查数组中的每一个元素是否都满足条件，返回布尔值
arr.reduce(()=>{},初始值) //函数累加器
arr.find() //返回第一个通过测试的元素
arr.findIndex() //返回第一个通过测试元素的下标
// 想要下标就用arr.keys()
for (let item of arr.values){
  console.log(item) // 返回元素
}
// 遍历获取下标和内容
for (let [index,item] of arr.entries()){
  console.log(index,item)
}
```
## 数组的扩展

>将伪数组转换为数组 Array.from()
>构造器构造数组时使用Array.of() 不管是1个参数还是多个参数都会转换为值并且会将各种类型的参数拼装为数组

> - arr.copyWithin() 替换数组中的某些元素

```javascript
let arr = [1,2,3,4,5]
// 第一个参数:起始下标,结尾下标
console.log(arr.copyWithin(1,3))
// 输出[1,4,5,4,5]
```

> - arr.fill() 填充

```javascript
// 构造长度度为3,默认填充为7
let arr = new Array(3).fill(7)
 // [7,7,7]
let array = [1,2,3,4,5]
// 替换填充，不包括结束位置，不填2,3参数全部替换
array.fill('填充',下标开始位置,结束位置)

```
> - indexOf 查询是否包含元素，查到返回下标，没查到返回-1
> - includes 检查是否包含元素，返回布尔值，并且支持检测Nan类型

## 扩展运算符 | rest参数
> - 扩展运算符：把数组或者类数组展开用逗号隔开
> - rest参数：把逗号隔开的值组合成一个数组

## 对象扩展
> - Object.is() 和全等一样，但是可以判断Nan === Nan
> - Object.assign() 合并对象
> - in 判断对象是否包含某个属性，也可以用在数组中，在数组中是判断下标是否存在值
> - Object.keys(obj).forEach(key => {}) 遍历对象
> - Object.getOwnPropertyNames(obj).forEach(key => {})遍历对象
> - Reflect.ownKeys(obj).forEach(key => {})遍历对象

## 深拷贝与浅拷贝
> - 引用同一块内存地址就是浅拷贝
> - 可以用JSON.strungify 和 JSON.parse 是实现深拷贝

```javascript
function deCopy(initObj,copyObj){
  for (const key in copyObj) {
    let copvalue = copyObj[key]
      if(copvalue instanceof Object){
        // 根据类型创建了一个空的引用类型 {} []
        let subtage = new copvalue.constructor;
        initObj[key] = subtage;
        deCopy(subtage,copyObj[key])
      }else{
        initObj[key] = copyObj[key]
      }
  }
}
```
## 类与继承
> - Class
> - extends 继承
> - spuer()传递属性
> - 定义最顶层 get 只读 set 对属性有业务逻辑存取的时候可以使用

```javascript
// 只读
get sex(){
  return this._sex
}
// 设置
set sex(val){ // 1:male 0 :female
  if(val == 0){
    tihs._sex = 'male' 
  }else if(val == 0){
    this._sex = 'female'
  }
}
```
> - static 定义静态

```javascript
// 定义静态方法
static getCount(){
}
// 静态属性
实例对象.count = 9 
```

## Symbol
> - 一种新的原始数据类型（象征，独一无二）
> - 申明方式

```javascript
let s1 = Symbol('foo')
s1 = s1 // false
let s1 = Symbol.for('foo')
let s2 = Symbol.for('foo')
s1 == s2 // true

```
> - description 描述
> - keyFor 查找全局已定义的
> - 避免重复属性的逻辑
> - for in 无法遍历Symbol
> - 只取Symbol

```javascript
for (let key of Object.getOwnPropertySymbols(user)){
  console.log(key)
}
```
> - 两者都取

```javascript
  for(let key of Reflect.ownKeys(user)){
    console.log(key)
  }
```
> - 消除魔术字符串

## Set
> - 一种新的数据结构,类数组但是值是唯一的
>
> - 类似于数组，但是成员的值都是唯一的，没有重复的值。(可以用来做数组去重)

 ```javascript
const s = new Set([1,2,3,4,4]); // 可以接收数组
s.clear() //清空所有值方法
s.add("b"); add方法题添加值 返回set本身
s.delete(1); dlete方法删除值,参数为value
s.has(1); has方法根据value判断值是否存在,返回值true,false
注意：
可以使用forEach方法遍历进行取值
Set方法之间可以使用链式操作 s.add(1).add(2).add(3)
 ```
> - 增加 add 可以链式操作
> - 删除 delete
> - 清空 clear
> - 判断包含 has
> - 判断长度 size
> - 遍历

```javascript 
let s = new Set([1,2,3])
// Set(3){1,2,3}
s.forEach(item=>console.log(item))
for( let key  of s ){
  console.log(key)
}
for (let key of s.keys) // 只取key
for (let key of s.value) // 只取value
for (let key of s.entries) // 两者都取

```
> - 应用场景

```js
// 数组去重
let arr = [1,2,2,3,4]
let s = new Set(arr)
// 合并去重
let arr1 = [1,2,3,4]
let arr2 = [2,3,4,5,6]
let s = new Set([...arr1,...arr2])

// 交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
let result = new Set(arr1.filter(item => s2.has(item)))

// 差集
let result = new Set(arr1.filter(item => !s2.has(item)))
```



## webakSet
> - 只能添加对象
> - 添加 add
> - 删除 delete 
> - 不能遍历，弱引用

## Map
```js
let m = new Map()
let obj = {
name:'immoc'
}
m.set(obj,'es')
console.log(m.get(obj))
m.delete(obj)
m.has(obj)

let map = new Map([
  ['name','imooc'],
  ['age,5]
])
```
> - 遍历 forEach fo of  
> - 引用场景 和对象差不多，比较强大支持多类型的key，频繁的增删改成map更推荐
> - weakmap key只支持引用类型

## 字符串的扩展
> - unicode 字符串表示法
>   ​```javascript
>   \uxxxx 码点 0000 ~ ffff
>   \u{超出范围的码点}
> - 字符串的遍历 for of
> - String.fromCharCodePoint() //通过码点返回对应字符
> - String.prototype.includes() 是否包含
> - String.prototype.startsWith() 某个字符开头
> - String.prototype.endsWith() 某个字符串结尾
> - String.prototype.repeat() 替换

## 正则表达式扩展
> - i(忽略大小写) m(多行匹配) g(全局匹配)
> - (y) 粘连修饰符 （u

## 数值的扩展
> - toString(进制)
> - parseInt(b,进制)
> - 0B二进制 0O八进制
> - Number.isFinite() 判断有限的字符
> - Number.isNaN() 判断是不是NaN
> - Number.isInteager()
> - Math.pow(2,53) 次方
> - Number.MAX_SAFE_INTEGER 最大值
> - Number.MIN_SAFE_INTEGER 最小值
> - Number.isSafeInteger() 判断是否是个安全的值
> - Math.trunc() 去除小数 可以转换布尔值 无法转换返回NaN
> - Number.ParseInt() 转为整数
> - Math.sing() 判断是正 返回1 负返回-1 0 返回0 可以判断布尔值
> - Math.cbrt() 计算立方根

## Proxy代理
> - 对属性进行拦截
>
> - Es5中使用

```javascript
let obj = {}
let newVal = ''
Object.defineProperty(obj,'name',{
  get(){
    return newVal
  }
  set(val){
    newVal = val
  }
})
```
> - ES6语法

```javascript
let obj = {}

// get 获取方法
let arr = [7,8,9]
let arr = new Proxy(arr,{
  get(target,prop){
    return prop in target ? target[prop] : 'error'
  }
})
console.log(arr[1]) // 8
```

> - 对象代理

```js
let dict = {
    'hello' : '你好',
    'world' : '世界'
}
dict = new Proxy(dict,{
    get(target,prop){
        return prop in target ? target[prop] : prop
    }
})
```

> - set钩子方法

```js
let arr = []
arr = new proxy(arr,{
    set(target,prop,val){
        if(typeof val === 'number'){
            target[prop] = val 
            return true
        }else{
            return false
        }
    }
})

arr.push(5)
arr.push(6)
console.log(arr[0],arr[1]) // 5,6
```

> - has 钩子方法

```js
let range = {
    start:1,
    end:5
}
range = new proxy(range,{
    has(target,prop){
        return prop >= target.start && prop <= target.end
    }
})

console.log(2 in range) // true
console.log(9 in range) // false
```

> - ownKeys

```js
let obj = {
    name:'imooc',
    [Symbol('es')] : 'es6',
    _password:'***'
}

console.log(Object.getOwnPropertyNames(obj))
obj = new Proxy(userinfo,{
    ownKeys(target){
        // 拦截遍历，返回不是以_开头的字符串
        return Object.keys(target).filter(key => !key.startWidth('_'))
    }
})
// 不想遍历出带_标识的私有属性
for (let key in obj){
    // 拦截器会拦截进行处理
    console.log(key)
}
```



> - 需求， 不能删除修改私有属性

```js
let obj = {
    name:'imooc',
    [Symbol('es')] : 'es6',
    _password:'***'
}

obj = new Proxy(obj,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            return target[prop]
        }
    },
    set(target,prop,val){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            return target[prop]
        }
    },
    deleteProperty(target,prop){
    	if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            delete target[prop]
            return true
        }
	},
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith('_'))
    }
})


try{
    obj._password = 'xxx'
}catch(e){
    console.log(e.message) // 不可访问
}



// apply拦截修改返回值
let sum = (...args) => {
    let num = 0;
    args.forEach(item => {
        num += item
    })
    return num
}

sum = new Proxy(sum,{
    apply(target,ctx,args){
        return target(...args) * 2 
    }
})
console.log(sum(1,2))
console.log(sum.call(null,1,2,3)
console.log(sum.apply(null,[1,2,3]))

// construct 拦截new命令
let User = class {
    constructor(name){
        this.name = name
    }
}

User = new Proxy(User,{
    // 1.目标对象,参数,实例对象 return:对象
    construct(target,args,newTarget){
        return new target(...args)
    }
})
console.log(new User('imooc'))
```

> get:拦截对象属性的读取，比如proxy.foo和proxy['foo']
>
> set:拦截对象属性的设置，返回一个布尔值，比如proxy.foo = v 或 proxy['foo'] = v
>
> has:拦截propKey in proxy的操作，返回一个布尔值
>
> ownKeys：拦截Object.getOwnPropertyNames(proxy)、Object.getOwnPropertySymbols(proxy)、
>
> Object.keys(proxy)、for....in循环 返回一个数组
>
>  deleteProperty：拦截删除请求
>
> apply：拦截函数的调用，call和apply操作
>
> construct：拦截new命令，返回一个对象



## Reflect

> - 映射
> - 将Object属于语言内部的方法放到Reflect上
> - 修改某些Object方法的返回结果，让其变得合理
> - 让Object操作变成函数行为
> - Reflect对象的方法与Proxy对象的方法一一对应

```js
// 使用Reflect改写拦截
let User = {
    name:'zs',
    age : 18,
    _password:'**'
}
User = new Proxy(User,{
    get(target,prop){
        if(prop.startsWith('_')){
            throw new Error('无法访问')
        }else{
            return Reflect.get(target,prop)
        }
    },
    set(target,prop,val){
      if(prop.startsWith('_')){
          throw new Error('不可访问')
      }else{
          Reflect.set(target,prop,val)
          return true
      }
    },
    deleteProperty(target,prop){
        if(prop.startsWith('_')){
            throw new Error('不可访问')
        }else{
            Reflect.deleteProperty(target,prop)
            return true
        }
    },
    ownKeys(target){
        return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
    }
})

try {
    User.age = 5
    console.log(User)
} catch (e) {
    console.log(e.message)
}

for(let key in User){
    console.log(key);
}
```

## Promise

> 解决深渊回调地域，对异步操作状态

```js
let p  = new Promise((resolve,reject) => {
    setTimeout(()=>{
        //
        if(){
           resolve()
           }
        else{
            reject()
        }
    },1000)
}).then(()=>{},()=>{})
```

> - Promise.resolve()
> - Promise.reject()
> - Promise.all()
> - Promise.race()

```js
// 静态方法之间调用
let p1 = Promise.resolve('success')
p1.then(res => {
    console.log(res)
})
// 要所有的Promise对象都完成，才认为是完成
Promise.all([])
// 只要一个Promise对象完成就认为完成
Promise.race([])

// 应用场景(模拟)批量上传照片
const imgArr = ['1.jpg','2.jpg','3.jpg']
let promiseArr = []
imgArr.forEach(item => {
    promiseArr.push(new Promise((resolve,reject)=>{
        resolve()
    }))
})
Promise.all(promiseArr).then(res =>{
    console.log('图片全部上传完成')
})

// 应用场景模拟(加载图片)
function imgGet(){
    return new Promise((resolve,reject)=>{
        let img = new Image()
        img.onload = function(){
			resolve(img)
        }
        img.src = 'http://xxxx.www.com.jpg'
        })
}
// 2秒超时
function timeout(){
    return new Promise((resovle,reject)=>{
        setTimeout(()=>{
            reject('图片请求超时')
        },2000)
    })
}

// 那个函数的Promise对象先到达就返回那个
Promise.race([imgGet,timeout]).then(res => {
    console.log(res)
}).catch(e => {
    console.log(e)
})
```



## Generator(生成器函数)

> 可以在函数执行时暂停,且可以在暂停的位置继续执行！

> - 定义，函数定义有个*
> - 函数内部有个yield关键字
> - 要手动.next(参数)调用
> - 返回对象{value:,done:}
> - 不能在嵌套函数内部使用

```js
function* foo(){
    for(let i = 0; i < 3; i++){
        yield i
    }
}
// 调用,单步执行
let f = foo()
// {value:0,done:false}
console.log(f.next())
```

```js
function* gen(x){
    let y = 2 * (yield(x + 1))
    let z = yield(y / 3)
    return x + y + z
}
let g = gen(5)
console.log(g.next()) // 6
console.log(g.next(12)) // y=24 24/3=8
console.log(g.next(13))
```

```js
// 7的倍数
function* count(x = 1){
    while(true){
        if(x % 7 === 0){
            yield x
        }
        x++
    }
}

let n = count()
console.log(n.next().value) //7
console.log(n.next().value) //14
console.log(n.next().value) //21
console.log(n.next().value) //28
```

```js
// 对异步操作管理
function ajax(url,conllback){
    // 模拟ajax
}
function request(url){
    ajax(url,res=>{
        getData.next(res)
    })
}

function* gen(){
    let res1 = yield request('static/a.json')
     console.log(res1)
    let res2 = yield request('static/b.json')
   	 console.log(res2)
    let res3 = yield request('static/c.json')
     console.log(res3)
}
let getData = gen()
getData.next()
```

## Iterator 迭代器

> 是一种接口机制，为各种不同的数据结构提供统一访问的机制
>
> 主要供for....of消费
>
> 一句话:不支持遍历的数据结构“可遍历”

```js
// 定义返回必须是对象
function makeIterator(arrgs){
    let index = 0;
    return {
        next(){
            return index < arrgs.length ? {
                value:arrgs[index++],
                done:false
            } : {
                value:undefined,
                done:true
            }
        }
    }
}

let get = MakeIterator(['a','b','c'])
console.log(get.next()) // a
console.log(get.next()) // b
```

> - 可迭代的原型内部有Symbol.iterator方法

```js
let arr = ['a','b','c']
let it = arr[Symbol.iterator]()
console.log(it.next()) // a
console.log(it.next()) // b
console.log(it.next()) // c
console.log(it.next()) // undefined
```

> - 原生具备Iterator接口的数据结构
> - Array
> - Map
> - Set
> - String
> - TypedArray
> - 函数的arguments对象
> - NodeList对象

> 可迭代协议:Symbol.iterator,可以直接使用for....of
>
> 迭代器协议:return {next(){return{value,done}}}

```js
let courses = {
 	allCourse:{
        key1:['a','b','c','d'],
        key2:['e','f','g'],
        key3:['h','k','y']
    }
}
//自己构造迭代器协议
courses[Symbol.iterator] = function(){
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    return {
        next(){
            // 第一次进来长度0，取反
            if(!values.length){
                if(keys.length){
                    values = allCourse[keys[0]]
                    // 取完删除
                    keys.shift()
                }
            }
            return {
                done:!values.length, //长度等于0时取完取反
                value:value.shift() //删除第一个返回值
            }
        }
    }
}

// 生成器函数
courses[Symbol.iterator] = function* (){
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    while(1){
        if(!values.length){
            if(keys.length){
                values.allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            }else{
                return false
            }
        }else{
            yield values.shift()
        }
    }
}

for(let c of courses){
    console.log(c)
}
```



## Module(模块化)

> CommJs：node.js
>
> AMD:require.js 异步模块，依赖前置
>
> CMD:sea.js 
>
> Es6

:disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved::disappointed_relieved:太难了

```js
// 导出
export const a = 5;
// 导入
import {a} from './'
export default
import add,{} from './'
import * as mod from './'
```

# Es7

## 数组扩展

> 
>
> Array.prototype.includes(searchElement,fromIndex)
>
> includes VS indexOf 都只能判断基本数据类型
>
> 数值扩展
>
> 幂运算符* 等同于Math.pow()
>
> 2 ** 10



# ES8

> Object.values() 输出value值
>
> Object.entries

## 对下属性描述符

```js
Reflect.defineProperty(obj,'name',{
    value:'',
    writable:true,// 能否重写
    configurable:true, //能否删除
    enumerable:fasle// 能否遍历
})
Object.getOwnPropertyDescriptors(obj) // 获取所有属性
Object.getOwnPropertyDescriptor(obj,'name') // 获取单个属性
```

## 字符串扩展

```js
// 填充
String.prototype.padStart(填充完后长度,填充字符)
String.prototype.padEnd(填充完后长度,填充字符)
```

## 尾逗号

> 编译后方便，允许参数列表后加逗号

# ES9

## 异步迭代

>  for-await-of 
>
> Symbol.asyncIterator

```js
function PromiseTime(date){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                value:date,
                done:false
            })
        },date)
    })
}

let arr = [PromiseTime(1000),PromiseTime(2000),PromiseTime(3000)]
// 遵循异步迭代器
arr[Symbol.asyncIterator] = function(){
    let nextIndex = 0;
    return {
        next(){
            return nextIndex < arr.length ? arr[nextIndex++] : 
            Promise.resolve({
                value:undefined,
                done:true
            })
        }
    }
}

async function test(){
    for await(let key of arr){
        console.log(key);
    }
}

test()
```

## 正则表达式扩展

> dotAll
>
> 居民组匹配
>
> 后行断言

```js

```

## Promise扩展

> Promise.prototype.finally() 最终的

```js
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1')
    }.1000)
}).then().catch().finally(()=>{
    console.log('不管成功失败我都会执行')
})
```

# ES10

## 对象扩展

```js
let obj  = {
    name:'zs'
    age:18
}
// 对象转数组
const entries = Object.entries(obj)
// 数组转对象
const fromEntries = Object.fromEntries(entries)
// 转换map
const map = new Map()
map.set('name','imoc')
map.set('course','se')
Object.fromEntries(map)

const course = {
    marh:80,
    english:85,
    chinese:90
}
const res = Objcet.entries(course).filter(([item,val])=>{val > 80})
// 还原
console.log(Object.fromEntries(res))

```

## 字符串扩展

```js
// 去除头部空白字符串
String.prototype.trimStart()
// 去除尾部字符串
String.prototype.trimEnd()
```

## 数组扩展

```js
// 对多维数组扁平化
const arr = [[1,2,3,4,5,[6,7,8,[9,10,11]],12]]
Array.prototype.flat
arr.flat(4) //4层
arr.flat(Infinity)// 无限的
// 遍历数组，并且扁平化
const arr = [1,2,3,4,5,6]
const res = arr.flatMap(x => [x+1])
```

## 可选的Catch Binding

> 省略catch的参数和括号

# ES11

```js
// 全局捕获

function seletDiv(regExp,str){
    let matches = []
    for(let match of str.matchALL(regExp)){
        matches.push[match[1]]
    }
}


// 动态导入
import('./ajax').then(mod =>{
    mod.default('static/a.json',res=>{
        console.log(res)
    })
})
```

## 新的数据类型 BigInt

```js
// 大数据类型
```

## Promise扩展

```js
// 不论成功都返回状态
Promise.allSettled()
```

## globalThis

```js
// 提供一个标准方式获取不同环境下的全局对象

```

## 可选链

```js
user?.address?.getNum?.() // 存在调用
```

## 空值合并运算符

```js
const = null 
const a = b ?? 6 // 等于空则输出6
```

# Webpack

> 原理:静态模块打包器
>
> 1.核心概念 entry、output、loader、plugins
>
> 2.使用file-loader处理JS中的图片
>
> 3.使用url-loader处理图片
>
> 4.使用webpack-dev-server搭建开发环境

## 配置

```json
// 初始化项目
npm init -y || yanrn init -y
// 安装webpack依赖包
npm install --save-dev webpack-cli@3.3.12 webpack@4.44.1
// 配置webpack.config.js
module.exports = {
    mode:'development', // 切换开发模式
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    }
}
```

## Entry、output

> 单入口、多入口
>
> 出口

```json
// 单入口文件
module.exports = {
    entry:'',
    output:{
        path:path.resolve(__dirname,'dist'),
       	filename:'bundle.js'
    }
}

// 多入口文件
module.exports = {
    entry:{
        main:'./src/index.js',
        search:'./src/search.js'
    },
   output:{
       path:path.resolve(__dirname,'dist'),
       filename:'[name].js' // 固定语法，对应入口变量
   }
}
```

## loader

> 加载器，可以让webpack处理各类非JS文件的模块

```js
// 安装babel加载器
npm install --save-dev babel-loder@8.1.0 @babel/core@7.11.0 @babel/preset-env@7.11.0
// 在项目目录下创建.babelrc 配置
{
    "presets":["preset-env"]
}
// webpack.config.js 中配置
module.exports = {
   entry:{
        main:'./src/index.js',
        search:'./src/search.js'
    },
   output:{
       path:path.resolve(__dirname,'dist'),
       filename:'[name].js' // 固定语法，对应入口变量
   },
    // 所有加载器配置
   module:{
       rules:[
           {
               test:/\.js$/, // 检测的正则
               exclude:/node_modules/, // 排除,
               loader:'babel-loader' // 加载器模块名
               // 多个loader用use[],加载器从右到左顺序
           }
       ]
   }
}

// 完善编译,安装core-js模块
入口文件引入core-js/stable模块
```

## plugins

> 插件,可以执行范围更广的任务。

```js
// 安装htmlwebpackplugin插件
const htmlWebpackPlugin = require('html-webpack-plugin')
nodule.exports = {
    plugins:[
        new htmlWebpackPlugin({
            template:"./", //模板
            filename:'' // 命名
            chunks:[] // 想引入那个文件
        })
    ]
}
```



# Babel

> 1.ES6语法转义编译 （https/babeljs.io）转换成ES6之前的代码
>
> 查询帮助:setup页面,https/babeljs.io/setup
>
> 安装node、初始化json文件、
>
> 安装包,@babel/core/@babel/cli/@babel/preset-env
>
> 在json中添加编译命令:babel src -d dist
>
> 创建配置文件.babelrc,配置{"presets":["@babel/preset-env"]}
>
> 编译测试 npm run bliud

# Cookie

> 浏览器存储数据的一种方式
>
> 应为存储在用户本地,而不是存储在服务器上,是本地储存
>
> 一般会自动随着浏览器每次请求发送到服务端

```js
// 写入cookie
document.cookie='username=zs';

// 读取
document.cookie // 全部的cookice

// （名称）（值）（到期时间），名称货值值包含非英文字母，写入时需要使用encodeURLComponent()编码,读取时使用decodeURLCpmponent()解码

// 生命周期,到期时间没设置,默认会话Cookie,窗口关闭就关闭,expires 或max-age
document.cookie = `username=alex;expires=${new date()}`
max-age 值为数字,当前时间+多少秒后过期,单位秒
// 值是或负数，cookie就会删除
// domain域名,限定使用范围
document.cookie = 'username=alex;domain=www.baidu.com'
// path路径
// HttpOnly 限制不能js去访问
// secure安全标志，智能在https的情况下才能发送服务端
```

## 封装cookie

```js
// 写入cookie
const set = (name,value,{maxAge,domain,path,secure} = {} ) =>{
    let str = `${name}=${value}`
    if(typeof maxAge === number){
        str += `;maxage=${maxAge}`
    }
    if(domain){
        str+=`;domain=${domain}`
    }
    if(path){
        str+=`;path=${path}`
    }
    if(secure){
         str+=`;secure=${secure}`
    }
}

// 键值对获取cookie
const get = (name)=>{
    let cookie = document.cookie.split(';')
    for(let item of cookie){
        let [key,value] = item.split('=')
        if(key == name){
            return {key:value}
        }
        return undefine
    }
}
```

# localStorage

> 本地储存，不会发送到服务端、有大小限制，看浏览器
>
> 持久化本地存储
>
> 键值对类型，只能是字符串类型，不是字符串也会自动转换为字符串

```js
// 写入
localStorage.setItem('username','alex')

// 长度length

// 读取
localStorage.getItem('username')

// 清除clear
localStorage.clear()

// 自动填充,用来做表单自动填充
```

# Ajax

> XHR属性、方法

```js
//创建
let xhr = new XMLHttpRequest() 
// 设置请求方式
xhr.open(方式,url)
// 发送请求
xhr.send()
//接收响应 
xhr.onload = function(){
    //接收返回数
    xhr.responseText 
}
xhr.timeout = 1000; // 超时时间,单位毫秒
xhr.withCredentials // 指定是否携带cookie
// load() 加载,响应数据可用时
// abort() 终止请求，配合abort事件一起使用,再send后调用
// setRequestHeader() 设置请求头信息,只有部分可以设置
// error()
// 通过html表单元素创建FromData对象
const fd = new FromData(表单元素)
// 自己添加数据
fd.append()
```
## get请求参数
```js
let parse = 'name=' + name.value + '&pwd='+pwd.value; 
xhr.open('get','/get?'+parse ); /需要自己拼接
```

## post请求参数
```apl
xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded') 设置请求报文
xhr.send(参数)apl
```
## 请求参数的格式apl
```apl
application/x-www-form-urlencoded
name=zhangsan&age=20&sex=男
2.application/json
{name:'zhangsan',age:'20',sex:'男'}
在传递jsons数据格式时，还要将json对象转换为字符串参数
注意:服务器端需引用body-parser模块,并且设置
bodyParser.json()来解析json
```
## Ajax状态码
```js
共有五个
0:请求已经初始化
1:请求建立
2:请求发送
3:响应完成，但只是部分数据
4:响应完成
xhr.readyState 获取ajax状态码
xhr.onreadyStateChange() 监听状态码改变方法
必须用于xhr.send()方法前
```
## 错误处理：
```js
xhr.status 获取http状态码
400:返回结果不是预期的结果
404:请求地址不存在
500:服务器端能接收到请求，服务器端返回500状态码
onerror事件网络中断，请求失败
xhr.onerror = function(){
    alert(‘网络错误，请检查’)
}
```
## 注意:
> IE低版本浏览器下,ajax存在严重的缓存,解决防范为每次请求的url参数不一样即可,所以可以在请求的url后面拼接一个随机参数。

## 封装Ajax函数
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
## 三级联动
```apl
1.通过接口获取省份信息
2.后去下拉框元素
3.将返回的省份信息显示在下拉框中
4.为下拉框元素添加元素表单值改变事件(onchange)
5.当用户悬着省份时，根据省份id获取城市信息
6.当用户选择城市时，根据城市id获取县城信息
```
##  模板引擎:
```js
art-template
具体看官网文档,有使用说明
template.defaults.imports：开放模板变量
```
## FormData
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

## 二进制文件上传
```js
file.onchange = function(){
    let form = new FormData();
    form.append('attName',this.files[0]);
    let xhr = new XMLHttpReuqest();
    xhr.open('post',url);
    xhr.send(form);
}
```
## 文件上传进度展示
```js
file.onchange =function(){
    xhr.upload.onprogress = function(ev){
    bar.style.width = (ev.loaded / ev.total) * 100 + '%'
    }
}
```

## JSONP代码同源
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

## CORS跨域资源共享 跨域资源共享
```js
在服务端设置响应头header:
允许那些客户端访问:
'Access-Control-Allow-Origin':'*'，
允许客户端的那些请求方式访问:
'Access-Control-Allow-Methods','get,post'
服务端解决方案
利用服务端请求，再把请求结果返回客户端
利用模块 request
```

## Cookie：跨域
```js
客户端设置:
withCredentials:true //允许跨域携带cookie
服务端设置:
Access-Control-Allow-Credentials:true //允许客户端请求时携带cookie
```
## $.ajax()
```yacas
type
url
data
contentType
beforeSend://发送请求之前的一些操作
success
error
```

## 发送jsonp
```yacas
$.ajax({
url,
jsonp // 自定义函数名称参数
jsonpCallback //自定义调用的函数
dataType:'jsonp'
success:
})
```
## $.get()、$.post()
```js
发送get或post请求
$.get(url,form,function(){})
$.post(url,form,function(){})
```

## Ajax全局事件

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

> - GET ： 获取数据
> - POST：添加数据
> - PUT：覆盖修改
> - DELETE：删除数据
> - PATCH  递增修改

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

```js
// 修改某一个用户信息
app.patch('/users/:id',(req,res)=>{
    const id = req.params.id
    res.send(`当前我们是在修改id为${id}用户信息`);
})
```



# XML

> XML的全称是extensible markup language,代表可扩展标记语言，它的作用是传输和存储数据。

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

> XML DOM 是w3c组织定义的一套操作XML文档对象的API。浏览器会将XML文档解析成文档对象模型

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

# axios

> 基于promise的http库,可以在浏览器和node中使用
>
> 第三方ajax库
>
> 中文官方文档:http://www.axios-js.com/zh-cn/docs/

```js
// 使用
axios(url,{
    method:'post',// 请求参数
    headers:{}, // 请求头
    params:{}, // 请求头携带数据
    data:{}, // 请求体携带数据
    timeout:10 // 超时时间
    withCredentials:true // 允许跨域携带cookie
}).then(()=>{}).catch(()=>{})

// get
axios.get()
//
axios.post
```

# Fetch

> Fetch是基于Promise的方案替代ajax
>
> 没有abort timeout等事件方法

```js
/** 使用参数1:url,参数2:{
method:,
body:,不能直接传对象可以传FromData,或者JSON.stringify()
headers:,
mode:'cors',跨域默认就是
}
*/
fetch(url).then((res)=>{
    if(res.ok){
        // 读取,返回promise对象
        return res.json();
        return res.rext();
    }else{
        throw new Error(`HTTP Code 异常 ${res.status}`)
    }
}).then(data=>{
    console.log(data)
}).catch(e =>{
    console.log(e)
})
// body/bodyUsed 只能读一次,读过之后就不让读了
// ok 如果为true,表示可以读取数据

```

# GIT

```js
Git是一个版本管理控制系统（缩写vcs），它可以在任何时间点,将文档的状态作为更新记录保存起来，也可以在任何时间点，将更新记录恢复回来。
```

## 使用前配置

> 在使用git前，需要告诉git你是谁,在向git仓库提交时需要用到

### 1.配置提交人姓名:

   ```js
   git config --global user.name // 提交人姓名
   ```

### 2.配置提交人邮箱:

```js
git config --global user.email // 提交人邮箱
```

### 3.查看git配置信息:

```yacas
git config --list
```

### 注意

> ​	1.如果要对配置信息进行修改,重复上述命令即可。
>
> ​	2.配置只需要执行一次

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
git commit -m // 需要提交的信息
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
git rest --hard  ID // 之前提交的ID
```

## GIT分支

### 1.查看分支

```yacas
git branch
```

### 2.创建分支

```yacas
git branch // 分支名称
```

### 3.切换分支

```yacas
git checkout // 分支名称
```

### 4.合并分支

```yacas
git merge // 来源分支
```

### 5.删除分支 (分支被合并后才允许被删除) (-D 强制删除)

```yacas
git branch -d // 分支名称
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

> - A在自己的计算机中创建本地仓库
> - A在github中创建远程仓库
> - A将本地仓库推送到远程仓库
> - B克隆远程仓库到本地进行开发
> - B将本地仓库中开发的内容推送到远程仓库
> - A将远程仓库中的最新内容拉取到本地

1.推送远程仓库 HTTPS协议的

```js
git push 仓库地址 分支名称
```

```js
git push 仓库地址别名 分支名称
```

```js
git push -u 仓库地址别名 分支名称   // -u记住已送地址及分支，下次推送只需要输入git push即可
```

```js
git remote add 仓库地址别名 远程仓库地址 // 给仓库地址取别名
```

2.拉取仓库最新数据

```js
git pull 仓库地址 分支名称
```



## 第三人进行克隆

```js
git clone 仓库地址
```

## 解决冲突

> 在多人同时开发一个项目时,如果两个人修改了同一个文件的同一个地方,就会发生冲突。需要人为解决
>
> 1.先拉取仓库中的最新版本拉取到本地
>
> 2.删除多余的内容，重新提交

## 跨团队协作

> 1.fork仓库
>
> 2.将仓库克隆到本地进行修改
>
> 3.推送远程仓库
>
> 4.发起 pull reqest
>
> 5.原仓库作者审核
>
> 6.原作者合并代码

## ssh免登录

1.生成密匙 一路回车 (存储C盘默认用户.ssh文件夹内)

```yacas
ssh-keygen
```

## 忽略清单

不需要被git管理的文件名字添加到此文件中,在执行git命令时候，git就会忽略这些文件。

git忽略清单文件名称

```js
新建.gitignore 将不需要添加暂存区的文件名称写在里边即可
```

## 为仓库添加详细的说明

在项目根目录文件新建：readme.md 文件



# Node.js

https://lurongtao.gitee.io/felixbooks-gp19-node.js/basics/01-Node.js%E5%9F%BA%E7%A1%80.html 文档

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

```js
npm view 包名 versions // 查看版本
```

```js
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
```js
// 这样适合安装公司内部的git服务器上的项目
npm install git+https://git@github.com:lurongtao/gp-project.git

// 或者以ssh的方式
npm install git+ssh://git@github.com:lurongtao/gp-project.git
```

## NPM脚本

> npm允许在package.json文件里面,使用scripts字段定义脚本
>
> 执行多个脚本，要清楚先后顺序，如果是并行执行可以使用&链接

```json
{
	"scripts":{
		"build":"node build.js"
	}
}
```

> 执行

```
npm run build
```



## cross-env 运行跨平台设置和使用环境变量的脚本

> cross-env 使得您可以使用单个命令，而不必担心为平台正确设置或使用环境变量。这个迷你的包(cross-env)能够提供一个设置环境变量的 scripts，让你能够以 Unix 方式设置环境变量，然后在 Windows 上也能兼容运行。

```json
{
  "scripts": 
    {
    "build": "cross-env NODE_ENV=production webpack --config build/webpack.config.js"
  	}
}
```

> 在脚本中获取

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

#### http-proxy-middware 跨域代理

```js
const http = require('http')
const proxy = require('http-proxy-middleware')

http.createServer((req, res) => {
  let url = req.url

  res.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })

  if (/^\/api/.test(url)) {
    let apiProxy = proxy('/api', { 
      target: 'https://m.lagou.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })

    // http-proy-middleware 在Node.js中使用的方法
    apiProxy(req, res)
  } else {
    switch (url) {
      case '/index.html':
        res.end('index.html')
        break
      case '/search.html':
        res.end('search.html')
        break
      default:
        res.end('[404]page not found.')
    }
  }
}).listen(8080)
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

#### watchFile 文件修改监听

```js
const fs = require('fs')

fs.watchFile('./logos',(curr,prev)=>{
     console.log(`当前最近的修改时间是${curr.mtime}`); // 修改时返回
    console.log(`当前最近的修改时间是${prev.mtime}`); // 修改完成返回
})
```

## Zlib 流

```js
const fs = require('fs')
const zlib = require('zlib')

// 创建压缩
const gzip = zlib.createGzip()

// 创建读取流
const readStream = fs.createReadStream('./file.txt')
// 创建压缩流
const writeStream = fs.createWriteStream('./file.gzip')

// 流操作
readStream
    .pipe(gzip)
    .pipe(writeStream)
```

## readline 逐行读取

```js
const fs = require('fs')
const readline = require('readline')

// 创建一个标准输入和输出
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

// 等待输入结果,如果不输入就一直停顿
rl.question('你如何看待我帅这回事？',(value)=>{
  console.log(`感谢您的宝贵意见:${value}`);
  rl.close()
})
```

## crypto 加密

```js
const crypto = require('crypto')

let pwd = 'abg123gas'

const hash = crypto.createHmac('sha256',pwd)
              .update(pwd)
              .digest('hex')

console.log(hash);
```

## Express

### 设置路由

```js
const express = require('express')
const app = express()
// 前端路由
const indexRoute = require('./route/index')

// 拦截前端路由
app.use('/',indexRoute)

app.listen(3381,()=>{
  console.log('localhost:3381');
})
```

```js
const express = require('express')

const indexRoute = express.Router();

indexRoute.get('/',(req,res)=>{
    res.send('欢迎访问首页')
})


indexRoute.get('/index',(req,res)=>{
  res.send('欢迎来到首页')
})

module.exports = indexRoute
```

## MongoDB

### 安装

```
// 下载地址
www.mongodb.org/downloads
// 创建文件
mongod --dbpath d:\data\db
// 查看
mongo

```
### 术语/概念
|  术语   |  概念    |
| ---- | ---- |
|   database   |  数据库    |
|   collection   |   数据库表/集合   |
|   document   |  数据记录行/文档    |
|   field   |   数据字段/域   |
|      |  表链接不支持    |
|   primary key   |   主键   |
|      |      |

### 概念

```
一个mongodb中可以建立多个数据库。

MongoDB的默认数据库为"db"，该数据库存储在data目录中。

MongoDB的单个实例可以容纳多个独立的数据库，每一个都有自己的集合和权限，不同的数据库也放置在不同的文件中。

集合存在于数据库中，集合没有固定的结构，这意味着你在对集合可以插入不同格式和类型的数据，但通常情况下我们插入集合的数据都会有一定的关联性。

文档是一个键值(key-value)对(即BSON)。MongoDB 的文档不需要设置相同的字段，并且相同的字段不需要相同的数据类型，这与关系型数据库有很大的区别，也是 MongoDB 非常突出的特点。

一个简单的文档例子如下：
{"genres": ["犯罪","剧情" ],"title": "肖申克的救赎"}

```

### 常用命令

```mysql
1.Help查看命令提示
help
db.help()
db.test.help()
db.test.find().help()

2.创建/切换数据库
use music

3.查询数据库
show dbs

4.查看当前使用的数据库
db/db.getName()

5.显示当前DB状态
db.stats()

6.查看当前DB版本
db.version()

7.查看当前DB的链接机器地址
db.getMongo()

8.删除数据库
db.dropDatabase()

```

### 集合操作命令

```mysql
1.创建一个集合
db.createCollection("collName", {size: 20, capped: true, max: 100});
db.collName.isCapped(); //判断集合是否为定容量

2.得到指定名称的集合
db.getCollection("account");

3.得到当前db的所有集合
db.getCollectionNames();

4.显示当前db所有集合的状态
db.printCollectionStats();

```

### 增删改查

```mysql
1.添加
db.users.save({name: ‘zhangsan', age: 25, sex: true});

2.修改
db.users.update({age: 25}, {$set: {name: 'changeName'}}, false, true);
              
相当于：update users set name = ' changeName' where age = 25;
db.users.update({name: 'Lisi'}, {$inc: {age: 50}}, false, true);
相当于：update users set age = age + 50 where name = 'Lisi';
db.users.update({name: 'Lisi'}, {$inc: {age: 50}, $set: {name: 'hoho'}}, false, true);
相当于：update users set age = age + 50, name = 'hoho'  where name = 'Lisi';

3.删除
db.users.remove({age: 132});
```

```mysql
（1）查询所有记录
db.userInfo.find();
相当于：select* from userInfo;

（2）查询去重后数据
db.userInfo.distinct("name");
相当于：select distict name from userInfo;

（3）查询age = 22的记录
db.userInfo.find({"age": 22});
相当于： select * from userInfo where age = 22;

（4）查询age > 22的记录
db.userInfo.find({age: {$gt: 22}});
相当于：select * from userInfo where age > 22;

（5）查询age < 22的记录
db.userInfo.find({age: {$lt: 22}});
相当于：select * from userInfo where age < 22;

6）查询age >= 25的记录
db.userInfo.find({age: {$gte: 25}});
相当于：select * from userInfo where age >= 25;

（7）查询age <= 25的记录
db.userInfo.find({age: {$lte: 25}});

（8）查询age >= 23 并且 age <= 26
db.userInfo.find({age: {$gte: 23, $lte: 26}});

（9）查询name中包含 mongo的数据
db.userInfo.find({name: /mongo/});
//相当于%%
select * from userInfo where name like '%mongo%';

（10）查询name中以mongo开头的
db.userInfo.find({name: /^mongo/});
相当于： select * from userInfo where name like 'mongo%';

（11）查询指定列name、age数据
db.userInfo.find({}, {name: 1, age: 1});
相当于：select name, age from userInfo;

（12）查询指定列name、age数据, age > 25
db.userInfo.find({age: {$gt: 25}}, {name: 1, age: 1});
相当于：select name, age from userInfo where age >25;

（13）按照年龄排序
升序：db.userInfo.find().sort({age: 1});
降序：db.userInfo.find().sort({age: -1});

（14）查询name = zhangsan, age = 22的数据
db.userInfo.find({name: 'zhangsan', age: 22});
相当于：select * from userInfo where name = 'zhangsan' and age = ’22';

（15）查询前5条数据
db.userInfo.find().limit(5);
相当于：select top 5 * from userInfo;

（16）查询10条以后的数据
db.userInfo.find().skip(10);
相当于：select * from userInfo where id not in (select top 10 * from userInfo);

（17）查询在5-10之间的数据
db.userInfo.find().limit(10).skip(5);

（18）or与 查询
db.userInfo.find({$or: [{age: 22}, {age: 25}]});
相当于：select * from userInfo where age = 22 or age = 25;

（19）查询第一条数据
db.userInfo.findOne();
相当于：select top 1 * from userInfo;db.userInfo.find().limit(1);

（20）查询某个结果集的记录条数
db.userInfo.find({age: {$gte: 25}}).count();
相当于：select count(*) from userInfo where age >= 20;

```

## Webpack

```
安装 yarn add webpack
新建一个源代码文件夹 src
安装模块
yarn add webpack-cli
```

### 配置文件 webpack.config.js

```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  // 设置模式：开发模式
  mode: 'development',
  devtool: 'source-map',
  // 入口
  entry:{
    'js/app' : './src/app.js' //要打包的文件路径
  },
  // 出口文件
  output:{
    path:path.join(__dirname,'./dist'),  //打包好放置的文件路径
    filename:'[name].js' //把打包好的文件放进js文件夹
  },
  // 配置插件
  plugins:[
    // 生成 HTML文件,渲染到页面
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './public/index.html'),
      filename: 'index.html',
      inject: true
    }),
    // 拷贝文件或目录，修改最终输出路径的配置
    new CopyPlugin({
      patterns: [
        {
          from: './public/*.ico',
          to: path.join(__dirname, './dist/favicon.ico'),
        },
        {
          from: './public/libs',
          to: path.join(__dirname, './dist/libs'),
        }
      ]
    }),
    // 覆盖更新dist
    new CleanWebpackPlugin()
  ],
  // 配置server
  devServer:{
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 8080,
  },

  // 前端渲染模板
  module: {
    rules: [
      {
        test: /\.art$/,
        use: {
          loader: 'art-template-loader',
          options: {
            escape: false
          }
        }
      },
    ]
  }
}


```

### 编译

```js
npx webpack
```

### 服务器

```js
// 在内存中使用
webpack-dev-server
```



## randomstring 生成加密字符串



## Mongoose工具

```
http://www.mongoosejs.net/
```

## bcrypt加密

## cors后端跨域模块

## Robo T3 可视化数据库软件

## Cookie-Session 模块

## npm 版本配置锁定
> - ^ : 锁定major
> - ~ : 锁定minor
> - 空 : 锁定patch
> - * : 最新版本

## node的浏览端调试
> - node --inspect --inspect-brk server.js

## node进程管理工具
> - supervisor
> - nodemon
> - forever
> - pm2

## yarn 源
https://zhuanlan.zhihu.com/p/35856841

## express template
> - ejs
> - pug
> - jade
> - art-template

## 页面render
> - SSR (Server Side Render)
> - CSR (Client Side Render)
> - http://aui.github.io/art-template/

## mongodb可视化工具
> robo 3T

## Node.js项目架构
### 前端（Frontend）
> - 前端工程化环境（webpack）
> - CSS 预处理工具（sass）
> - JS模块化：ES Module, CommonJS Module
> - JS库：jQuery
> - SPA：single page application，路由：SME-Router
> - UI 组件库：Bootstrap(AdminLTE)
> - RMVC: Art-template

### 后端（Backend）
> - Node.js
> - Express(static, Router, randomstring, bcrypt, cookie-session)
> - MongoDB (Mongoose)
> - EJS
> - jwt(json web token)
> - RMVP

### 开发架构
> - 前后端分离的开发架构

### 秘钥生成
> openssl
生成私钥：
openssl > genrsa -out rsa_private_key.pem 2048

> 根据私钥生成公钥：
> openssl > rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem

# 杂项
## Jquery观察者模式调用

### 定义：

```
$('body').on('自定义调用id',(e,data)=>{
	
})
```

### 调用:

```js
$('body').trigger(调用id,要传的数据)
```

## 加载动画

```js
LottieFiles
```

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