const fs = require('fs')

// fs.readFile('./',(err,content)=>{
//   console.log(content);
// })


// for (let i = 0; i < 10; i++) {
//   fs.writeFile(`./logos/logo${i}.log`,`log${i}`,(err)=>{
//     console.log('成功')
//   })

// }

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