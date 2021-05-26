const fs = require('fs')

fs.watchFile('./logos',(curr,prev)=>{
    // console.log(`当前最近的修改时间是${curr.mtime}`);
    console.log(`当前最近的修改时间是${prev.mtime}`);
})