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