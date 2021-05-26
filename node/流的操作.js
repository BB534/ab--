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