/**
 * 数组内置方法
 * 1.创建数组
 * 2.Array[idnex]访问数组元素
 * 3. forEach遍历数组
 * 4. push 添加元素到数组末尾
 * 5. pop删除数组末尾的元素
 * 6. unshift添加元素到数组的头部
 * 7. shift 删除数组头部的元素
 * 7. indeOf 通过某个元素返回数组中的索引
 * 9. splice 从一个人索引位置删除多个元素,传入第三个参数为替换
 * 10.slice 克隆数组 ,传入参数为截取数组
 * 11.数组长度 length
 * 12.from将伪数组，或对象转为数组,就可以调用一些数组的方法
 * 13.isArray() 判断某个变量是否是一个数组对象
 * 13.Array.of() 将一组参数转为数组
 * 14.14.Array.join() 链接所有数组元素转为字符串
 * 15.find() 找到第一个满足条件的元素
 */

// 1.创建字面量
let arr = [1,2,3,4];
// let arr = Array();

// 2.通过索引访问数组元素
// console.log(arr[0]);

// 3.遍历数组 Es5+语法
// arr.forEach(function(item,index,array){
  // console.log(item); 返回value
  // console.log(index) 返回索引
  // console.log(array); 返回数组本身
// })

// 4.添加元素到数组末尾
// arr.push(6); 返回length

// 5.删除数组末尾元素
// arr.pop(); 返回length

// 6.添加元素到数组头部unshift
// arr.unshift(6) 返回length

// 7.删除数组头部元素
// arr.shift(); 返回删除的元素

// 8.找出元素在数组中的索引
// arr.indexOf(3) value:元素,返回值：返回数组索引

// 9.通过索引删除某个元素,或替换元素
// arr.splice(0,2);  value1:开始位置,value2:删除数量,value3:替换的值,如果没有就是删除

// 10.复制数组 value1：从第几个索引开始提取,如果为负数,则为倒数,value2：提取终止处,如果为负数为倒数
// let arr2 = arr.slice(); 对新的赋值并不会更改原数组

// 12.array.from
// 用法1：将字符串转换为数组,推荐使用es6语法中的展开运算符
// let arr2 = Array.from('foo');  
// console.log(arr3);
// 用法2:将对象转换为数组
// let set = new Set(['foo','bra','baz']);
// set = Array.from(set);
// console.log(set);

// 13.Array.of() //根据一组参数来创建数组
//如果参数为单个数值:创建一个长度为参数的空数组。数组元素不为undefined,而是empty(空),如果此时给利用索引给数组元素赋值,则数组长度就会被改变
// let arr1 = Array.of(7); 
// let arr1 = Array.of(1,2,3); 如果为多数值的话就是创建元素

// 14.Array.join() //连接所有数组元素,连成一个字符串
// console.log(arr.join());
